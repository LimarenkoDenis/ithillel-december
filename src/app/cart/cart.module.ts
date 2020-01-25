import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'cart', component: CartComponent, children: [
          // {

          // }
        ]
      }
    ])
  ],
  exports: [CartComponent],
})
export class CartModule { }
