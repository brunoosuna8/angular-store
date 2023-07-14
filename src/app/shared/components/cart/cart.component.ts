import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <!-- ngif es un escuchador, si algo cambia dentro se vuelve a renderizasr el componente, se crea un obj dataCart que tiene las props que se usan,para poder llamarlo dentro del elemento -->
    <ng-container
      *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart"
    >
      <ng-container *ngIf="dataCart.total">
        <mat-icon>add_shopping_cart</mat-icon>
        {{ dataCart.total | currency }}
        ({{ dataCart.quantity }})
      </ng-container>
    </ng-container>
  `,
})
export class CartComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  constructor(private shoppingCartSvc: ShoppingCartService) {}
}
