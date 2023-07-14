import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  //el decorador marca el comportamiento de la clase
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule], //cada ves que usemos un modulo de material lo exportamos para que este disponible para otros modulos
})
export class MaterialModule {}
