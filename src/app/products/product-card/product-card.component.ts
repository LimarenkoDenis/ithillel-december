import { IProduct } from './../interfaces/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: IProduct;

  @Input()
  public odd: boolean;

  @Output()
  public onBuy: EventEmitter<IProduct> = new EventEmitter();


  @Output()
  public onDeleteProduct: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  public buy(event: MouseEvent, product: IProduct): void {
    event.stopPropagation();
    this.onBuy.emit(product);
  }

  public deleteProduct(id: number): void {
    this.onDeleteProduct.emit(id);
  }

}
