import { CartService } from './services/cart.service';
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
  exports: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
