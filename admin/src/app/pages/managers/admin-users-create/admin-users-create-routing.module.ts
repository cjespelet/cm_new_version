import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersCreateComponent } from './admin-users-create.component';

const routes: Routes = [{ path: '', component: AdminUsersCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUsersCreateRoutingModule { }
