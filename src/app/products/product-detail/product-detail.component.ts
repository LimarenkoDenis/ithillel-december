import { Observable } from 'rxjs';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from '../interfaces/product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product$: Observable<IProduct>;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {


    // this.product$ = this.activeRoute.paramMap.pipe(
    //   switchMap(() => this.productsService.getProducts({page: 1, limit: 1}), (x: ParamMap, y: IProduct[]) => y[0])
    // );


    this.product$ = this.activeRoute.paramMap.pipe(
      switchMap((param: ParamMap) => this.productsService.getProduct(Number(param.get('productId'))))
    );


    // subscribe((data: ParamMap) => {
    //   console.log(data.get('productId'));

    // });
  }

}
