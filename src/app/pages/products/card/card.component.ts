import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product; //recibe las props del padre
  @Output() addToCartClick = new EventEmitter<Product>();
  constructor() {}
  ngOnInit(): void {
    console.log(this.product);
  }
  onClick(): void {
    console.log(this.product);
    this.addToCartClick.emit(this.product);
  }
}
