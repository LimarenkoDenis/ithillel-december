import { ICart } from './interfaces/cart';
import { IProduct } from './interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public date: Date =  new Date();
  public pi: number = Math.PI;
  public account = {
    name: 'Dan',
    title: 'SW',
    items: [1,2]
  }
  public view: 'list' | 'table' | 'row' = 'list';


  public isLoading: boolean = true;
  public cart: ICart[] = [];
  public products: IProduct[] = [
    {
      "id": 0,
      "title": "Cola",

      "description": "descr",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 12,
      "type": "drink",
      "created": "Sat Aug 31 2019 16:11:42 GMT+0300 (Eastern European Summer Time)"
    },
    {
      "id": 2,
      "title": "Pepsi cola",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 11,
      "type": "drink",
      "created": "Sat Aug 31 2019 16:11:42 GMT+0300 (Eastern European Summer Time)"
    },
    {
      "id": 3,
      "title": "Big Mac",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.Sdwch_BigMac.png",
      "price": 22,
      "type": "sandwich",
      "created": "Sat Aug 31 2019 16:11:42 GMT+0300 (Eastern European Summer Time)"
    },
    {
      "id": 4,
      "title": "Big Tasty",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.Sdwch_BigTasty.png",
      "price": 45,
      "type": "sandwich"
    },
    {
      "id": 5,
      "title": "pie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.MuffinBlackberry.png",
      "price": 10,
      "type": "dessert"
    },
    {
      "id": 6,
      "title": "chocolate",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 22,
      "type": "dessert"
    },
    {
      "id": 7,
      "title": "ice cream",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 45,
      "type": "dessert"
    },
    {
      "id": 8,
      "title": "Orange juice small",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.JuiceOrangeSmall.png",
      "price": 45,
      "type": "drink"
    },
    {
      "id": 9,
      "title": "Coffee 'Late' small",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.CoffeeLatteSmall.png",
      "price": 45,
      "type": "drink"
    },
    {
      "title": "Pizza product",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.CoffeeLatteSmall.png",
      "price": 45,
      "type": "drink",
      "id": 10
    }
  ];

  public ngOnInit() {
    setTimeout(() => this.isLoading = false, 2000);
  }


  public swithcView(view: 'list' | 'table' | 'row') {
    this.view = view;
  }

  public reverse(value) {
    return value.s
  }

  public buy(product: IProduct): void {
    console.log(product);


    const element: ICart | null = this.cart.find((item: ICart) => item.id === product.id);

    if (!element) {
      this.cart.push({...product, amount: 1});
      return;
    }

    const index: number = this.cart.findIndex((item: ICart) => item.id === product.id);
    this.cart[index] = {...this.cart[index], amount: this.cart[index].amount + 1};
  }
}
