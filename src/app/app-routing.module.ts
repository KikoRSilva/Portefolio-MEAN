import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ManageComponent } from './components/admin/manage/manage.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { EditTComponent } from 'src/app/components/admin/manage/EditTrabalhos/edit-t/edit-t.component';
import { EditDComponent } from 'src/app/components/admin/manage/EditDepoimentos/edit-d/edit-d.component';
import { NewTrabalhoComponent } from './components/admin/manage/new-trabalho/new-trabalho.component';
import { NewDepoimentoComponent } from './components/admin/manage/new-depoimento/new-depoimento.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewMessageComponent } from './components/admin/manage/view-message/view-message.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacte-me', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    {
        path: 'admin/manage',
        component: ManageComponent,
    },
    {
        path: 'admin/manage/projetos/new',
        component: NewTrabalhoComponent,
    },
    {
        path: 'admin/manage/projetos/:projetoId',

        component: EditTComponent,
    },
    {
        path: 'admin/manage/depoimentos/new',
        component: NewDepoimentoComponent,
    },
    {
        path: 'admin/manage/depoimentos/:depoimentoId',
        component: EditDComponent,
    },
    {
        path: 'admin/manage/mensagens/:id',
        component: ViewMessageComponent,
    },
    {
        path: 'politicas/privacidade',
        component: PrivacyComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
