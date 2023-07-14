import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //como llamamos a nuestro componente cuando lo queremos usar en el padre
  //template-inline
  template: ` <mat-toolbar color="primary">
    <span>My Store</span>
    <span class="spacer"></span>
    <app-cart></app-cart>
  </mat-toolbar>`, //su html
  styleUrls: ['./header.component.css'], //su css
})
export class HeaderComponent {}
