import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './authguard.service';
import { ErrorPage } from './error/error.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'servers',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./servers/servers.module').then(m => m.ServersModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
/*   {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found-routing.module').then(m => m.NotFoundModule)
  }, */
  {
    path: 'not-found',
    component: ErrorPage,
    data: { message: 'Page not found!' }
  },
  {
    path: '**', 
    redirectTo: 'not-found'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
