import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DepoimentosService } from 'src/app/services/depoimentos.service';

@Component({
    selector: 'app-new-depoimento',
    templateUrl: './new-depoimento.component.html',
    styleUrls: ['./new-depoimento.component.scss'],
})
export class NewDepoimentoComponent implements OnInit {
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private depoimentosService: DepoimentosService,
        private authService: AuthService
    ) {}

    newDepoimentoForm: FormGroup;
    errorMessage: boolean = false;
    successMessage: boolean = false;

    ngOnInit(): void {
        // check if is a valid user (only me)
        this.authService.isValidUser().subscribe(
            (res: HttpResponse<any>) => {},
            (error) => {
                this.router.navigate(['admin']);
            }
        );

        this.newDepoimentoForm = this.fb.group({
            name: ['', Validators.required],
            title: ['', Validators.required],
            text: ['', Validators.required],
            profilePic: ['', Validators.required],
        });
    }

    getName() {
        return this.newDepoimentoForm.get('name').value;
    }

    getTitle() {
        return this.newDepoimentoForm.get('title').value;
    }

    getText() {
        return this.newDepoimentoForm.get('text').value;
    }

    getProfilePic() {
        return this.newDepoimentoForm.get('profilePic').value;
    }

    sendForm() {
        console.log(this.newDepoimentoForm.value);

        this.depoimentosService
            .createDepoimento(
                this.getName(),
                this.getTitle(),
                this.getText(),
                this.getProfilePic()
            )
            .subscribe(
                (response) => {
                    console.log(response);
                    if (response) {
                        this.errorMessage = false;
                        this.successMessage = true;
                        setTimeout(() => {
                            this.router.navigate(['admin/manage']);
                        }, 1500);
                    }
                },
                (error) => {
                    console.error(error);
                    this.successMessage = false;
                    this.errorMessage = true;
                }
            );
        //
    }
}
