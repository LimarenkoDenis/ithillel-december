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


  constructor() { }

  ngOnInit() {
  }


  public buy(product: IProduct): void {
    this.onBuy.emit(product);
  }

}
