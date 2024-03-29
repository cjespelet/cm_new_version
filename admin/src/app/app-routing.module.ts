import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }, 
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'admin-users', loadChildren: () => import('./pages/managers/admin-users/admin-users.module').then(m => m.AdminUsersModule) },
  { path: 'admin-users-create', loadChildren: () => import('./pages/managers/admin-users-create/admin-users-create.module').then(m => m.AdminUsersCreateModule) },
  { path: 'merchandise', loadChildren: () => import('./pages/merchandise/merchandise.module').then(m => m.MerchandiseModule) }, 
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule), canActivate: [CheckLoginGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
