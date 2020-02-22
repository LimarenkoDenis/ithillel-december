import { RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';
// import { CartModule } from './../cart/cart.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProdcutsSearchPipe } from './pipes/prodcuts-search.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductListComponent,
    ProdcutsSearchPipe,
    ProductDetailComponent,
    ProductSpecComponent
  ],
  providers: [
    ProductsService
  ],
  imports: [
    CommonModule,
    SharedModule,
    // CartModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
