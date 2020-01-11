import { ICart } from './../products/interfaces/cart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  public cart: ICart[] = [];


  constructor() { }

  ngOnInit() {
  }

}
