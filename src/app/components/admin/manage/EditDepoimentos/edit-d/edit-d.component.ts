import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DepoimentosService } from 'src/app/services/depoimentos.service';
import { Depoimento } from 'src/app/shared/depoimento.model';
import { UpdatedResponse } from 'src/app/shared/updated-response.model';

@Component({
    selector: 'app-edit-d',
    templateUrl: './edit-d.component.html',
    styleUrls: ['./edit-d.component.scss'],
})
export class EditDComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private depoimentosService: DepoimentosService,
        private authService: AuthService
    ) {}

    depoimento: Depoimento;
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
        this.route.params.subscribe((params: Params) => {
            this.depoimentosService
                .getDepoimento(params.depoimentoId)
                .subscribe((depoimento: Depoimento) => {
                    this.depoimento = depoimento;
                });
        });
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
            .updateDepoimento(
                this.depoimento._id,
                this.getName(),
                this.getTitle(),
                this.getText(),
                this.getProfilePic()
            )
            .subscribe(
                (response: UpdatedResponse) => {
                    console.log(response);
                    if (response.updated) {
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
