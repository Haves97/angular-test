import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product/:id', 
    component: ProductComponent
  },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
