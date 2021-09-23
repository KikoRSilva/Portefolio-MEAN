import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { SobreComponent } from './components/home/sobre/sobre.component';
import { ServicosComponent } from './components/home/servicos/servicos.component';
import { ClientesComponent } from './components/home/clientes/clientes.component';
import { TrabalhosComponent } from './components/home/trabalhos/trabalhos.component';
import { ProjetoComponent } from './components/home/projeto/projeto.component';
import { DepoimentosComponent } from './components/home/depoimentos/depoimentos.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/admin/login/login.component';
import { ManageComponent } from './components/admin/manage/manage.component';
import { EditTComponent } from './components/admin/manage/EditTrabalhos/edit-t/edit-t.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDComponent } from './components/admin/manage/EditDepoimentos/edit-d/edit-d.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { WebRequestInterceptor } from './interceptors/web-request.interceptor';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';
import { NewTrabalhoComponent } from './components/admin/manage/new-trabalho/new-trabalho.component';
import { NewDepoimentoComponent } from './components/admin/manage/new-depoimento/new-depoimento.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewMessageComponent } from './components/admin/manage/view-message/view-message.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactComponent,
        SliderComponent,
        SobreComponent,
        ServicosComponent,
        ClientesComponent,
        TrabalhosComponent,
        ProjetoComponent,
        DepoimentosComponent,
        AdminComponent,
        LoginComponent,
        ManageComponent,
        EditTComponent,
        EditDComponent,
        ScrollTopComponent,
        LoadingSpinnerComponent,
        NewTrabalhoComponent,
        NewDepoimentoComponent,
        PageNotFoundComponent,
        ViewMessageComponent,
        PrivacyComponent,
        CookiesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CarouselModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgProgressModule,
        NgProgressHttpModule,
        NgbModule,
        RouterModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: WebRequestInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
