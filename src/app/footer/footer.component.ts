import { ProductsService } from './../products/services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/interfaces/product';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.newProduct$.subscribe((product: IProduct) => {
      console.log(product, 'footer');
    })
  }

}
