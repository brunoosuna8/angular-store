import { Component } from '@angular/core';
//se vincula toda la logica del componente.component marca el comportamiento de una clase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-store';

  getName(): void {
    this.title = 'hola mundo';
  }
}
