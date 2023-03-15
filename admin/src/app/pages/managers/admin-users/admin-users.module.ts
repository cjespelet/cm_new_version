import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersComponent } from './admin-users.component';
import { MaterialModule } from '@app/material.module';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TableModule } from '@app/modules/table/table.module';
import { ButtonModule } from '@app/modules/button/button.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/','.json')
}

@NgModule({
  declarations: [AdminUsersComponent],
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    MaterialModule,
    TranslateModule.forRoot({
      defaultLanguage : 'no',
      loader:{
        provide: TranslateLoader,
        useFactory:createTranslateLoader,
        deps: [HttpClient],
      }
    }),
    TableModule,
    ButtonModule
  ]
})
export class AdminUsersModule { }
