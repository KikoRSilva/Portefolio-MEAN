import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TweenMax, gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements AfterViewInit {
    constructor() {}

    clientes: any[] = [
        {
            nome: 'KDS Offshore, Lda',
            link: 'http://kdsoffshore.pt/index.html',
            img: '/assets/logos/kds_positivo.png',
        },
        {
            nome: 'Lx Pyro',
            link: 'http://lxpyro.herokuapp.com/',
            img: 'assets/logos/logoLxPyro.png',
        },
        {
            nome: 'IST - U. Lisboa',
            link: 'https://tecnico.ulisboa.pt/',
            img: '/assets/logos/IST_Logo.png',
        },
    ];

    download: any = { url: '/assets/CV-01-21.pdf', filename: 'CV-01-21.pdf' };

    ngAfterViewInit(): void {
        var element = document.getElementById('telefone');
        gsap.registerPlugin(ExpoScaleEase);
        TweenMax.to(element, 0.4, {
            scale: 0.8,
            yoyo: true,
            repeat: -1,
        });
    }
}
