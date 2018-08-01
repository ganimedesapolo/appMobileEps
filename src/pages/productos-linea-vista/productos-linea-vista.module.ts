import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosLineaVistaPage } from './productos-linea-vista';

@NgModule({
  declarations: [
    ProductosLineaVistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosLineaVistaPage),
  ],
})
export class ProductosLineaVistaPageModule {}
