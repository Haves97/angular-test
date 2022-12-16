import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsertRoutingModule } from './usert-routing.module';
import { UsertComponent } from './usert.component';


@NgModule({
  declarations: [UsertComponent],
  imports: [
    CommonModule,
    UsertRoutingModule
  ]
})
export class UsertModule { }
