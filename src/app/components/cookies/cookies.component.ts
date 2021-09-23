import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieServiceService } from 'src/app/services/cookie-service.service';

@Component({
    selector: 'app-cookies',
    templateUrl: './cookies.component.html',
    styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent implements OnInit {
    consente: Boolean = false;
    @Output() popupEvent = new EventEmitter<string>();

    constructor(private cookieService: CookieServiceService) {}

    ngOnInit(): void {
        if (this.cookieService.getConsented()) {
            this.consente = true;
        }
    }

    openCookieConsentPopup() {
        this.cookieService.setConsent();
        this.popupEvent.emit('open');
        window.location.reload();
    }
}
