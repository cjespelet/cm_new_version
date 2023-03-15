import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from '@app/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@app/app.module';
import { HttpClient } from '@angular/common/http';
import { ColumnValuePipe } from './pipes/column-value.pipe';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    TableComponent,
    ColumnValuePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ButtonModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
