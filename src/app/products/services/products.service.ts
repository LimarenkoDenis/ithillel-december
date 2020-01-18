import { IPRoductPaginationOptions } from './../interfaces/product-pagination-options';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {delay, tap} from 'rxjs/operators'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IProductToCreate } from '../interfaces/product-to-create';
@Injectable()
export class ProductsService {
  public newProduct$: BehaviorSubject<IProduct> = new BehaviorSubject(null);

  public a = 1;

  public constructor(
    private http: HttpClient
  ) {}

  public getProducts(options: IPRoductPaginationOptions): Observable<IProduct[]> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        _page: String(options._page),
        _limit: String(options._limit)
      }
    });

    return this.http.get<IProduct[]>(`${environment.api}/products`, { params });


    // return of(this._products).pipe(
    //   delay(2000)
    // );
  }


  public  addProduct(product: IProductToCreate): Observable<IProduct> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'token'
    });

    return this.http.post<IProduct>(`${environment.api}/products`, product, {headers}).pipe(
      tap((item: IProduct) => this.newProduct$.next(item))
    );
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/products/${id}`);
  }

  public update(prodcut: IProductToCreate, id: number): Observable<IProduct> {
    return this.http.patch<IProduct>(`${environment.api}/prcts/${id}`, prodcut);
  }
}
