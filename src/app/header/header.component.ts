import { CartService } from './../cart/services/cart.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


export interface IMYSliderValue {
  value: number;
  abs: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  public totalSum: number = 0;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.totalSum = this.cartService.totalSum;
  }


}
