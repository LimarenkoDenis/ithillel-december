import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
