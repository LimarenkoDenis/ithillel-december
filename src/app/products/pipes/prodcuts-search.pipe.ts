import { IProduct } from './../interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodcutsSearch'
})
export class ProdcutsSearchPipe implements PipeTransform {

  public transform(value: IProduct[], text: string): IProduct[] {
    if (!text) {
      return value;
    }


    return value.filter((item: IProduct) => {
      return `${item.title}${item.description}`.toLowerCase().includes(text.toLowerCase());
    });
  }

}
