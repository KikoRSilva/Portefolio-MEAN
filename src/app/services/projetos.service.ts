import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
    providedIn: 'root',
})
export class ProjetosService {
    constructor(private webReqService: WebRequestService) {}

    getProjetos() {
        return this.webReqService.get('projects');
    }

    getProjeto(id: string) {
        return this.webReqService.get(`projects/${id}`);
    }

    createProjeto(
        name: string,
        link: string,
        image: string,
        language: string,
        type: string[],
        classes: string
    ) {
        return this.webReqService.post('projects', {
            name,
            link,
            image,
            language,
            type,
            classes,
        });
    }

    updateProjeto(
        id: string,
        name: string,
        link: string,
        img: string,
        language: string,
        type: string[],
        classes: string
    ) {
        return this.webReqService.patch(`projects/${id}`, {
            name,
            link,
            img,
            language,
            type,
            classes,
        });
    }

    deleteProjeto(id: string) {
        return this.webReqService.delete(`projects/${id}`);
    }
}
