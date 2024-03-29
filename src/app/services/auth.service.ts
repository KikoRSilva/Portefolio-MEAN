import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { shareReplay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private webService: WebRequestService,
        private router: Router,
        private http: HttpClient
    ) {}

    login(email: string, password: string) {
        return this.webService.login(email, password).pipe(
            shareReplay(),
            tap((res: HttpResponse<any>) => {
                // the auth tokens will be in the header of this response
                this.setSession(
                    res.body._id,
                    res.headers.get('x-access-token'),
                    res.headers.get('x-refresh-token')
                );
            })
        );
    }

    logout() {
        this.removeSession();
    }

    isValidUser(): Observable<HttpResponse<any>> {
        return this.http
            .get(`${this.webService.ROOT_URL}/users/valid`, {
                headers: {
                    'x-refresh-token': this.getRefreshToken(),
                    _id: this.getUserId(),
                },
                observe: 'response',
                responseType: 'text',
            })
            .pipe(
                tap((res: HttpResponse<any>) => {
                    return res;
                })
            );
    }

    getAccessToken() {
        return localStorage.getItem('x-access-token');
    }

    getRefreshToken() {
        return localStorage.getItem('x-refresh-token');
    }

    getUserId() {
        return localStorage.getItem('user-id');
    }

    setAccessToken(accessToken: string) {
        localStorage.setItem('x-access-token', accessToken);
    }

    private setSession(
        userId: string,
        accessToken: string,
        refreshToken: string
    ) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    }

    private removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }

    getNewAccessToken() {
        return this.http
            .get('users/me/access-token', {
                headers: {
                    'x-refresh-token': this.getRefreshToken(),
                    _id: this.getUserId(),
                },
                observe: 'response',
            })
            .pipe(
                tap((res: HttpResponse<any>) => {
                    this.setAccessToken(res.headers.get('x-access-token'));
                })
            );
    }
}
