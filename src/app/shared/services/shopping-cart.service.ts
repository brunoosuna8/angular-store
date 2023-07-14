import { Injectable } from '@angular/core';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { Subject, Observable } from 'rxjs';
//service for handle the products cart,came info from cardComponent.
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  products: Product[] = [];
  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get totalAction$(): Observable<number> {
    //cuando se trabaja con observable se suele poner un signo de dolar al final
    return this.totalSubject.asObservable();
  }
  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }
  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  updateCart(product: Product): void {
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }
  private addToCart(product: Product): void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }
  private quantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }
  private calcTotal(): void {
    const total = this.products.reduce((acc, prod) => (acc += prod.price), 0);
    this.totalSubject.next(total);
  }
}
