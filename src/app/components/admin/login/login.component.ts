import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}
    valid: boolean = false;
    invalid: boolean = false;
    spinner: boolean = false;
    userForm;
    ngOnInit(): void {
        this.authService
            .isValidUser()
            .subscribe((response: HttpResponse<any>) => {
                console.log(response);
                if (response.ok) {
                    this.router.navigate(['admin/manage']);
                    return;
                }
            });
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, ,]],
            password: ['', [Validators.minLength(5), Validators.required]],
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            // parse the email and password from the form!
            let email: string = this.userForm.value.email;
            let password: string = this.userForm.value.password;

            // try to login
            this.authService.login(email, password).subscribe(
                (response: HttpResponse<any>) => {
                    if (response.ok) {
                        this.invalid = false;
                        this.spinner = true;
                        setTimeout(() => {
                            this.spinner = false;
                            this.valid = true;
                        }, 1500);

                        setTimeout(() => {
                            this.router.navigateByUrl('/admin/manage');
                        }, 3000);
                    }
                },
                (error) => {
                    this.spinner = true;
                    setTimeout(() => {
                        this.spinner = false;
                        this.invalid = true;
                    }, 1500);
                }
            );
        } else {
            this.invalid = true;
        }
    }
}
