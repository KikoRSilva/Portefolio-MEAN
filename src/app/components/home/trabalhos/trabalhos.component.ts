import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/services/projetos.service';
import { Trabalho } from 'src/app/shared/trabalho.model';

@Component({
    selector: 'app-trabalhos',
    templateUrl: './trabalhos.component.html',
    styleUrls: ['./trabalhos.component.scss'],
})
export class TrabalhosComponent implements OnInit {
    trabalhos: Trabalho[] = [];
    constructor(private projetosService: ProjetosService) {}

    ngOnInit(): void {
        this.projetosService
            .getProjetos()
            .subscribe((trabalhos: Trabalho[]) => {
                this.trabalhos = trabalhos;
            });
    }
}
