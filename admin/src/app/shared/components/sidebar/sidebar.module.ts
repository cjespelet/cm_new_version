import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from '@app/material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core'
import { TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/','.json')
}

@NgModule({
  declarations: [SidebarComponent ],
  imports: [
    CommonModule, 
    RouterModule, 
    MaterialModule,
    TranslateModule.forRoot({
      defaultLanguage : 'no',
      loader:{
        provide: TranslateLoader,
        useFactory:createTranslateLoader,
        deps: [HttpClient],
      }
    }),],
  exports : [SidebarComponent]
})
export class SidebarModule { }
