import { IProduct } from './../interfaces/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

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


  public searchControl: FormControl = new FormControl('Initial value');


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
