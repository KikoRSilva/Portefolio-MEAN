import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Mensagem } from 'src/app/shared/mensagem.model';

@Component({
    selector: 'app-view-message',
    templateUrl: './view-message.component.html',
    styleUrls: ['./view-message.component.scss'],
})
export class ViewMessageComponent implements OnInit {
    constructor(
        private mensagensService: MensagemService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) {}

    mensagem: Mensagem;

    ngOnInit(): void {
        // check if is a valid user (only me)
        this.authService.isValidUser().subscribe(
            (res: HttpResponse<any>) => {},
            (error) => {
                this.router.navigate(['admin']);
            }
        );
        this.route.params.subscribe((params: Params) => {
            this.mensagensService
                .getMensagem(params.id)
                .subscribe((mensagem: Mensagem) => {
                    this.mensagem = mensagem;
                });
        });
    }

    onMensagemClick(mensagem: Mensagem) {
        this.mensagensService.lida(mensagem).subscribe(() => {
            mensagem.lida = !mensagem.lida;
        });
    }
}
