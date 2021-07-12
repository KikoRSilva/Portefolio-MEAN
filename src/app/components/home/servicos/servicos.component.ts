import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
// import { gsap } from 'gsap';

@Component({
    selector: 'app-servicos',
    templateUrl: './servicos.component.html',
    styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent implements AfterViewInit {
    constructor() {}

    ngAfterViewInit() {
        // gsap.from('#card-group', {
        //     scrollTrigger: {
        //         trigger: '#card-group',
        //         toggleActions: 'play none none none',
        //         scrub: 3,
        //     },
        //     scale: 0.95,
        //     y: 500,
        //     duration: 2.2,
        //     ease: 'easeIn',
        // });
    }

    cardGroup: Card[] = [
        {
            src: '/assets/ux-interface.png',
            title: 'Desenvolvedor Frontend',
            text: 'Tenho facilidade em desenvolver a partir de um esboço até ao produto final de forma a trazer novas ideias para o browser.',
            linguagens: 'HTML, CSS, Sass, Javascript, Typescript',
            ferramentas: [
                {
                    name: 'VS Code',
                    link: 'https://code.visualstudio.com/',
                },
                {
                    name: 'Bootstrap',
                    link: 'https://getbootstrap.com/',
                },
                {
                    name: 'Bulma',
                    link: 'https://bulma.io/',
                },
                {
                    name: 'Angular',
                    link: 'https://angular.io/',
                },
                {
                    name: 'Figma',
                    link: 'https://www.figma.com/',
                },
            ],
        },
        {
            src: '/assets/backend.png',
            title: 'Desenvolvedor Backend',
            text: 'Poder criar a estrutura e o mecanismo de uma aplicação fascina-me. É trabalhoso criar todas as ligações necessárias, mas eu gosto.',
            linguagens: 'Python, Javascript, PHP, Java, SQL, MongoDB, NodeJs',
            ferramentas: [
                {
                    name: 'VS Code',
                    link: 'https://code.visualstudio.com/',
                },
                {
                    name: 'Google Firebase',
                    link: 'https://firebase.google.com/',
                },
                {
                    name: 'SQlite',
                    link: 'https://www.sqlite.org/index.html',
                },
                {
                    name: 'MongoDB',
                    link: 'https://www.mongodb.com/cloud/atlas',
                },
                {
                    name: 'MySql',
                    link: 'https://www.mysql.com/',
                },
            ],
        },
        {
            src: '/assets/app-development.png',
            title: 'Desenvolvedor de Apliacações',
            text: 'Sempre me interessei em desenvolver aplicações e tento sempre melhorar o meu conhecimento nesta área.',
            linguagens: 'Python, Flutter, Java, C, Typecript',
            ferramentas: [
                {
                    name: 'VS Code',
                    link: 'https://code.visualstudio.com/',
                },
                {
                    name: 'Glade',
                    link: 'https://glade.gnome.org/',
                },
                {
                    name: 'Kivy',
                    link: 'https://kivy.org/',
                },
                {
                    name: 'Ionic',
                    link: 'https://ionicframework.com/',
                },
            ],
        },
    ];
}
