import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
    providedIn: 'root',
})
export class DepoimentosService {
    constructor(private webReqService: WebRequestService) {}

    getDepoimentos() {
        return this.webReqService.get('depoimentos');
    }

    getDepoimento(id: string) {
        return this.webReqService.get(`depoimentos/${id}`);
    }

    createDepoimento(
        name: string,
        title: string,
        text: string,
        profilePic: string
    ) {
        return this.webReqService.post('depoimentos', {
            name,
            title,
            text,
            profilePic,
        });
    }

    updateDepoimento(
        id: string,
        name: string,
        title: string,
        text: string,
        profilePic: string
    ) {
        return this.webReqService.patch(`depoimentos/${id}`, {
            name,
            title,
            text,
            profilePic,
        });
    }

    deleteDepoimento(id: string) {
        return this.webReqService.delete(`depoimentos/${id}`);
    }
}
