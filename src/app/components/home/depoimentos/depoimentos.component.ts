import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/services/depoimentos.service';
import { Depoimento } from 'src/app/shared/depoimento.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-depoimentos',
    templateUrl: './depoimentos.component.html',
    styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent implements OnInit {
    depoimentos: Depoimento[] = [];
    constructor(private depoimentosService: DepoimentosService) {}

    ngOnInit(): void {
        this.depoimentosService
            .getDepoimentos()
            .subscribe((depoimentos: Depoimento[]) => {
                this.depoimentos = depoimentos;
            });
    }

    customOptions: OwlOptions = {
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        lazyLoad: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    };
}
