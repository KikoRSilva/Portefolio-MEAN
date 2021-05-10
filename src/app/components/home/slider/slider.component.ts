import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
    avatar: string = '/assets/avatar.png';
    hero: string = '/assets/hero1.png';
    animation: any;
    running: boolean = false;
    languageLogos: string[] = [
        '/assets/logos/c.svg',
        '/assets/logos/css.svg',
        '/assets/logos/java.svg',
        '/assets/logos/javascript.svg',
        '/assets/logos/html.svg',
        '/assets/logos/php.svg',
        '/assets/logos/python.svg',
        '/assets/logos/typescript.svg',
    ];
    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.animation = anime({
            targets: '.epicentro .el',
            translateX: function () {
                return anime.random(-1000, 1000);
            },
            translateY: function () {
                return anime.random(-500, 500);
            },
            scale: function () {
                return anime.random(-10, 10);
            },
            rotate: function () {
                return anime.random(-360, 360);
            },
            opacity: ['1', '0'],
            loop: false,
            autoplay: false,
            easing: 'spring(10, 10, 10, 0)',
        });
    }

    startAnimation() {
        this.running = true;
        this.animation.play();
        this.animation.restart();
    }
}
