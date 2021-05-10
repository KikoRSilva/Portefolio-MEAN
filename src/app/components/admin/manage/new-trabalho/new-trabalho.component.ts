import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
    selector: 'app-new-trabalho',
    templateUrl: './new-trabalho.component.html',
    styleUrls: ['./new-trabalho.component.scss'],
})
export class NewTrabalhoComponent implements OnInit {
    newProjetoForm: FormGroup;
    errorMessage: boolean = false;
    successMessage: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private fb: FormBuilder,
        private projetosService: ProjetosService
    ) {}

    ngOnInit(): void {
        // check if is a valid user (only me)
        this.authService.isValidUser().subscribe(
            (res: HttpResponse<any>) => {},
            (error) => {
                this.router.navigate(['admin']);
            }
        );

        this.newProjetoForm = this.fb.group({
            name: ['', Validators.required],
            link: ['', Validators.required],
            language: ['', Validators.required],
            classes: ['', Validators.required],
            image: ['', Validators.required],
            type: this.fb.array([this.fb.control('')]),
        });
    }

    addType() {
        this.type.push(this.fb.control(''));
    }

    removeType(index: number) {
        this.type.removeAt(index);
    }

    get type() {
        return this.newProjetoForm.get('type') as FormArray;
    }

    getName(): string {
        return this.newProjetoForm.get('name').value;
    }

    getLink(): string {
        return this.newProjetoForm.get('link').value;
    }

    getImage(): string {
        return this.newProjetoForm.get('image').value;
    }

    getClasses(): string {
        return this.newProjetoForm.get('classes').value;
    }

    getType(): string[] {
        return this.newProjetoForm.get('type').value;
    }

    getLanguage(): string {
        return this.newProjetoForm.get('language').value;
    }

    sendForm() {
        console.log(this.newProjetoForm.value);
        this.projetosService
            .createProjeto(
                this.getName(),
                this.getLink(),
                this.getImage(),
                this.getLanguage(),
                this.getType(),
                this.getClasses()
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
                    console.log(error);
                    this.successMessage = false;
                    this.errorMessage = true;
                }
            );
    }
}
