import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit, AfterViewInit {
    constructor() {}
    ngAfterViewInit(): void {
        gsap.from('#scrollButton', {
            scrollTrigger: {
                trigger: '#scrollButton',
                scrub: true,
            },
            y: 1000,
            duration: 0.6,
            ease: 'easeOut',
        });
    }

    ngOnInit(): void {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    }

    scrollTop() {
        gsap.to(window, { duration: 0, scrollTo: 0 });
    }
}
