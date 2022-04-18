import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authguard.service';

import {  EditServerComponent, ServerComponent } from './pages';
import { ServersPage } from './servers.page';
import { ServerResolver } from './service/server-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: ServersPage,
        canActivateChild: [AuthGuard],
        children: [
            { 
                path: ':id/edit', 
                component: EditServerComponent,
            },
            {
                path: ':id',
                component: ServerComponent,
                resolve: { server: ServerResolver }
            }
        ]
    }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
