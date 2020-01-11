import { CartModule } from './../cart/cart.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProdcutsSearchPipe } from './pipes/prodcuts-search.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductListComponent,
    ProdcutsSearchPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
