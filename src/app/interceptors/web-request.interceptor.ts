import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { empty, Observable, Subject, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class WebRequestInterceptor implements HttpInterceptor {
    refreshingAccessToken: boolean;

    accessTokenRefreshed: Subject<any> = new Subject();
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        req = this.addAuthHeader(req);
        // call next() and handle the response
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);

                if (error.status === 401) {
                    // 401 error so we are unauthorized

                    // refresh the access token
                    return this.refreshAccessToken().pipe(
                        switchMap(() => {
                            req = this.addAuthHeader(req);
                            return next.handle(req);
                        }),
                        catchError((err: any) => {
                            console.log(err);
                            this.authService.logout();
                            return empty();
                        })
                    );
                }
                return throwError(error);
            })
        );
    }

    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new Observable((observer) => {
                this.accessTokenRefreshed.subscribe(() => {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        } else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request
            // to refresh the access token
            return this.authService.getNewAccessToken().pipe(
                tap(() => {
                    console.log('Access Token Refreshed');
                    this.refreshingAccessToken = false;
                    this.accessTokenRefreshed.next();
                })
            );
        }
    }

    addAuthHeader(request: HttpRequest<any>) {
        // get the access token
        const token = this.authService.getAccessToken();

        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token,
                },
            });
        }
        return request;
    }
}
