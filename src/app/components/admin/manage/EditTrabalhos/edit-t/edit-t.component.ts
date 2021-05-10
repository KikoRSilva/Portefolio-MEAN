import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { Trabalho } from 'src/app/shared/trabalho.model';
import { UpdatedResponse } from 'src/app/shared/updated-response.model';

@Component({
    selector: 'app-edit-t',
    templateUrl: './edit-t.component.html',
    styleUrls: ['./edit-t.component.scss'],
})
export class EditTComponent implements OnInit {
    projeto: Trabalho;
    newProjetoForm: FormGroup;
    errorMessage: boolean = false;
    successMessage: boolean = false;
    constructor(
        private projetosService: ProjetosService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        // check if is a valid user (only me)
        this.authService.isValidUser().subscribe(
            (res: HttpResponse<any>) => {},
            (error) => {
                this.router.navigate(['admin']);
            }
        );
        this.route.params.subscribe((params: Params) => {
            this.projetosService
                .getProjeto(params.projetoId)
                .subscribe((projeto: Trabalho) => {
                    this.projeto = projeto;
                });
        });

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
            .updateProjeto(
                this.projeto._id,
                this.getName(),
                this.getLink(),
                this.getImage(),
                this.getLanguage(),
                this.getType(),
                this.getClasses()
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
    }
}
