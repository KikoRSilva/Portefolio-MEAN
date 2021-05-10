import { Injectable } from '@angular/core';
import { Mensagem } from '../shared/mensagem.model';
import { WebRequestService } from './web-request.service';

@Injectable({
    providedIn: 'root',
})
export class MensagemService {
    constructor(private webReqService: WebRequestService) {}

    getMensagens() {
        return this.webReqService.get('mensagens');
    }

    getMensagem(id: string) {
        return this.webReqService.get(`mensagens/${id}`);
    }

    createMensagem(name: string, email: string, text: string) {
        return this.webReqService.post('mensagens', {
            name,
            email,
            text,
        });
    }

    updateMensagem(
        id: string,
        name: string,
        title: string,
        text: string,
        profilePic: string
    ) {
        return this.webReqService.patch(`mensagens/${id}`, {
            name,
            title,
            text,
            profilePic,
        });
    }

    deleteMensagem(id: string) {
        return this.webReqService.delete(`mensagens/${id}`);
    }

    lida(mensagem: Mensagem) {
        return this.webReqService.patch(`mensagens/${mensagem._id}`, {lida : !mensagem.lida,})
    }
}
