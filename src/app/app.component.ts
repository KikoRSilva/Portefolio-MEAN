import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    cookieContainer = false;

    constructor() {
        setTimeout(() => this.displayCookieContainer(), 2000);
    }

    cookieButtonClicked() {
        this.cookieContainer = !this.cookieContainer;
        localStorage.setItem('cookieConsentAccepted', 'true');
    }

    displayCookieContainer() {
        if (localStorage.getItem('cookieConsentAccepted') !== 'true')
            this.cookieContainer = !this.cookieContainer;
    }
}
