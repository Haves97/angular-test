import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';

const routes: Routes = [{ path: '', component: PaymentComponent }, { path: 'user', loadChildren: () => import('./usert/usert.module').then(m => m.UsertModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
