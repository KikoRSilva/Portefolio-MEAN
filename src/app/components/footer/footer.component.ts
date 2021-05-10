import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    logo: string = '/assets/logo_size_invert_1.png';
    constructor() {}

    ngOnInit(): void {}
}
