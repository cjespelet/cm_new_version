import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from '@app/material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core'
import { TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '@app/app.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent ],
  imports: [CommonModule, RouterModule, MaterialModule,TranslateModule.forRoot({
    loader:{
      provide: TranslateLoader,
      useFactory:HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),],
  exports : [SidebarComponent]
})
export class SidebarModule { }
