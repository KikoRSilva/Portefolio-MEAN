import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookieServiceService } from './services/cookie-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    cookieContainer = false;

    constructor(private cookieService: CookieServiceService) {
        if (!this.cookieContainer)
            setTimeout(() => this.displayCookieContainer(), 2000);
    }

    cookieButtonClicked() {
        this.cookieContainer = !this.cookieContainer;
        this.cookieService.cookieButtonClicked();
    }

    displayCookieContainer() {
        if (!this.cookieService.getConsented())
            this.cookieContainer = !this.cookieContainer;
    }

    receiveEvent($event) {
        if ($event) {
            this.displayCookieContainer();
        }
    }
}
