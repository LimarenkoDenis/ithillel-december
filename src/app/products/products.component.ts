import { Observable } from 'rxjs';
import {CartService} from './../cart/services/cart.service';
import {ProductsService} from './services/products.service';
import {ICart} from './interfaces/cart';
import {IProduct} from './interfaces/product';
import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [],
})
export class ProductsComponent implements OnInit {
  public date: Date = new Date();
  public pi: number = Math.PI;
  public account = {
    name: 'Dan',
    title: 'SW',
    items: [1, 2]
  }
  public view: 'list' | 'table' | 'row' = 'list';


  public isLoading: boolean = true;
  public products$: Observable<IProduct[]>;

  public a;

  public constructor(
    private productServiece: ProductsService,
    private cartService: CartService,
    // ...
  ) {
    // console.log(productServiece);

  }


  public ngOnInit() {
    // this.productServiece.getProducts().subscribe((products: IProduct[]) => {
    //   this.products = products;
    // });


    this.products$ = this.productServiece.getProducts();

    this.a = this.productServiece.a;

    console.log(this.a);

    setTimeout(() => this.isLoading = false, 500);
  }


  public swithcView(view: 'list' | 'table' | 'row') {
    this.view = view;
  }

  public reverse(value) {
    return value.s
  }

  public buy(product: IProduct): void {
    console.log(product);


    this.cartService.addToCart(product);
  }
}
