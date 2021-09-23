import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CookieServiceService {
    private isConsented: Boolean = false;

    constructor() {
        if (localStorage.getItem('cookieConsentAccepted') === 'true')
            this.isConsented = true;
    }

    cookieButtonClicked() {
        localStorage.setItem('cookieConsentAccepted', 'true');
        this.isConsented = true;
    }

    getConsented() {
        return this.isConsented;
    }

    setConsent() {
        if (this.isConsented) {
            localStorage.setItem('cookieConsentAccepted', 'false');
            this.isConsented = !this.isConsented;
        } else {
            localStorage.setItem('cookieConsentAccepted', 'true');
            this.isConsented = !this.isConsented;
        }
    }
}
