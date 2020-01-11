import { NotificationService } from './../../shared/services/notification.service';
import { IProduct } from './../../products/interfaces/product';
import { ICart } from './../../products/interfaces/cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  private cart: ICart[] = [
  ];

  public constructor(
    private notificationService: NotificationService
  ) {

  }

  public get getCart(): ICart[] {
    return this.cart;
  }

  public addToCart(product: IProduct): void {
    const element: ICart | null = this.cart.find((item: ICart) => item.id === product.id);

    if (!element) {
      this.cart.push({...product, amount: 1});

      this.notificationService.send('Добавлено + 1');
      return;
    }

    const index: number = this.cart.findIndex((item: ICart) => item.id === product.id);
    this.cart[index] = {...this.cart[index], amount: this.cart[index].amount + 1};

    this.notificationService.send('Обновили колличество');
  }
}
