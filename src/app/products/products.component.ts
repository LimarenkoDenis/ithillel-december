import { IPRoductPaginationOptions } from './interfaces/product-pagination-options';
import { NotificationService } from './../shared/services/notification.service';
import { Observable, Subscription } from 'rxjs';
import {CartService} from './../cart/services/cart.service';
import {ProductsService} from './services/products.service';
import {ICart} from './interfaces/cart';
import {IProduct} from './interfaces/product';
import {Component, OnInit, OnDestroy} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public pageOptions: IPRoductPaginationOptions = {
    _page: 1,
    _limit: 2
  };


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
  public products: IProduct[];

  public a;
  public productSubscription: Subscription = new Subscription();

  public constructor(
    private productServiece: ProductsService,
    private cartService: CartService,
    private notificationService: NotificationService,
    private matSnackBar: MatSnackBar,
    // ...
  ) {
    // console.log(productServiece);

  }


  public ngOnInit() {
    this.getProducts(this.pageOptions);


    // this.products$ = this.productServiece.getProducts();

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
    this.cartService.addToCart(product);
  }

  public addProduct(): void {
    this.isLoading = true;
    this.productServiece.addProduct({
      title: String(Math.random()),
      description: 'description',
      photo: '',
      price: Math.random(),
      type: 'new type'
    })
    .subscribe((res: IProduct) => {
      this.notificationService.send(`${res.title} has been successfuly added!`);
      this.getProducts(this.pageOptions);
      this.isLoading = false;
    });
  }

  public getProducts(options: IPRoductPaginationOptions): void {
    this.productSubscription = this.productServiece.getProducts(options).subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }

  public changePageOptions(options: PageEvent): void {
    this.getProducts({
      _limit: options.pageSize,
      _page: options.pageIndex,
    });
  }

  public deleteProduct(id: number): void {
    this.isLoading = true;

    this.productServiece.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter((item: IProduct) => item.id !== id);

        // this.getProducts();
        this.matSnackBar.open(`${id} has been successfuly removed!`);
        this.isLoading = false;
      },
      (err: HttpErrorResponse) => {
        // err.
        this.isLoading = false;
        console.log(err)
        this.matSnackBar.open(`${id} ${err.statusText} Error!`);
      });
  }

  public ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
