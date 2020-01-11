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


  constructor() { }

  ngOnInit() {
  }


  public buy(product: IProduct): void {
    this.onBuy.emit(product);
  }


}
