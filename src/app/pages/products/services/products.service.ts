import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root', //indica de que este service esta disponible para toda la app,asi que no hace falta agregarlo al module de app-root en providers[ProductsService] aca se tendria que hacer los fects y gets, y se puede reutilizar
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiURL);
  }
}
