import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { MerchandiseComponent } from './merchandise.component';


@NgModule({
  declarations: [
    MerchandiseComponent
  ],
  imports: [
    CommonModule,
    MerchandiseRoutingModule
  ]
})
export class MerchandiseModule { }
