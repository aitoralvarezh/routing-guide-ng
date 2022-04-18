import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent } from './pages/user/user.component';
import { UsersPage } from './users.page';

const routes: Routes = [
    {
        path: '',
        component: UsersPage,
    },
    { 
        path: ':id/:name', 
        component: UserComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }