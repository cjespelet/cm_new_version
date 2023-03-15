import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersCreateRoutingModule } from './admin-users-create-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUsersCreateComponent } from './admin-users-create.component';
import { MaterialModule } from '@app/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@app/app.module';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from '@app/modules/button/button.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/','.json')
}

@NgModule({
  declarations: [AdminUsersCreateComponent],
  imports: [
    CommonModule,
    AdminUsersCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TranslateModule.forRoot({
      defaultLanguage : 'no',
      loader:{
        provide: TranslateLoader,
        useFactory:createTranslateLoader,
        deps: [HttpClient],
      }
    }),
    MaterialModule
  ]
})
export class AdminUsersCreateModule { }
