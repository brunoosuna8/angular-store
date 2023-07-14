import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(
    private productSvc: ProductsService,
    private ShoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productSvc
      .getProducts()
      .pipe(tap((res) => (this.products = res))) // Envolver el objeto 'products' en un array
      .subscribe();
  }
  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.ShoppingCartSvc.updateCart(product);
  }
}
