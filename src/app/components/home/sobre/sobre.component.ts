import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-sobre',
    templateUrl: './sobre.component.html',
    styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit, AfterViewInit {
    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTo plugin
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        gsap.from('#info-title', {
            scrollTrigger: {
                trigger: '#info-title',
                toggleActions: 'restart pause resume reset',
                scrub: 3,
                start: 'bottom 40%',
                end: 'top 40%',
            },
            opacity: 0.05,
            scale: 0,
            x: 2000,
            duration: 2.2,
            ease: 'easeIn',
        });
        gsap.from('#info-text', {
            scrollTrigger: {
                trigger: '#info-text',
                toggleActions: 'restart pause resume reset',
                scrub: 3,
                start: 'bottom 40%',
                end: 'top 40%',
            },
            opacity: 0.05,
            scale: 0,
            x: -2000,
            duration: 2.2,
            ease: 'easeIn',
        });
    }
}
