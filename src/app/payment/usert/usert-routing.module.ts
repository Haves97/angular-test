import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsertComponent } from './usert.component';

const routes: Routes = [{ path: '', component: UsertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsertRoutingModule { }
