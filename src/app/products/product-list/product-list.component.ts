import { IProduct } from './../interfaces/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public products: IProduct[] = [];

  @Output()
  public onBuy: EventEmitter<IProduct> = new EventEmitter();

  @Output()
  public onDeleteProduct: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  public buy(product: IProduct): void {
    this.onBuy.emit(product);
  }

  public deleteProduct(id: number): void {
    this.onDeleteProduct.emit(id);
  }

}
