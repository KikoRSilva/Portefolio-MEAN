import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    constructor(
        private mensagensService: MensagemService,
        private fb: FormBuilder
    ) {}

    newMessageForm: FormGroup;
    errorMessage: boolean = false;
    successMessage: boolean = false;

    ngOnInit(): void {
        this.newMessageForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]],
            text: ['', Validators.required],
        });
    }

    getName() {
        return this.newMessageForm.get('name').value;
    }

    getEmail() {
        return this.newMessageForm.get('email').value;
    }

    getText() {
        return this.newMessageForm.get('text').value;
    }

    sendForm() {
        console.log(this.newMessageForm.value);

        this.mensagensService
            .createMensagem(this.getName(), this.getEmail(), this.getText())
            .subscribe(
                (response) => {
                    console.log(response);
                    if (response) {
                        this.errorMessage = false;
                        this.successMessage = true;
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
