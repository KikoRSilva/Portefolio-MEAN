import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { AuthService } from 'src/app/services/auth.service';
import { DepoimentosService } from 'src/app/services/depoimentos.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { Depoimento } from 'src/app/shared/depoimento.model';
import { Mensagem } from 'src/app/shared/mensagem.model';
import { Trabalho } from 'src/app/shared/trabalho.model';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
    isLoggedIn: boolean = false;
    depoimentos: Depoimento[] = [];
    projetos: Trabalho[] = [];
    mensagens: Mensagem[] = [];

    constructor(
        private authService: AuthService,
        private router: Router,
        private depoimentosService: DepoimentosService,
        private projetoService: ProjetosService,
        private mensagensService: MensagemService,
        private progressService: NgProgress
    ) {}

    ngOnInit(): void {
        this.authService.isValidUser().subscribe(
            (res: HttpResponse<any>) => {},
            (error) => {
                this.router.navigate(['admin']);
            }
        );

        this.depoimentosService
            .getDepoimentos()
            .subscribe((depoimentos: Depoimento[]) => {
                this.depoimentos = depoimentos;
            });
        this.projetoService.getProjetos().subscribe((projetos: Trabalho[]) => {
            this.projetos = projetos;
        });

        this.mensagensService
            .getMensagens()
            .subscribe((mensagens: Mensagem[]) => {
                this.mensagens = mensagens.reverse();
            });
    }

    onLogoutButton() {
        this.authService.logout();
        this.router.navigate(['admin']);
    }

    onDeleteProjetoButton(id: string) {
        this.projetoService.deleteProjeto(id).subscribe((response: any) => {
            this.projetos = this.projetos.filter((val) => val._id !== id);
        });
    }

    onDeleteDepoimentoButton(id: string) {
        this.depoimentosService
            .deleteDepoimento(id)
            .subscribe((response: any) => {
                this.depoimentos = this.depoimentos.filter(
                    (val) => val._id !== id
                );
            });
    }

    onDeleteMensagemButton(id: string) {
        console.log('id = ', id);
        this.mensagensService.deleteMensagem(id).subscribe((response: any) => {
            this.mensagens = this.mensagens.filter((val) => val._id !== id);
        });
    }
}
