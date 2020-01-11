import { CartService } from './services/cart.service';
import { ICart } from './../products/interfaces/cart';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [CartService]
})
export class CartComponent implements OnInit {

  // @Input()
  public cart: ICart[] = [];

  public constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart;
  }

}
