import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosVistaPage } from './productos-vista';

@NgModule({
  declarations: [
    ProductosVistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosVistaPage),
  ],
})
export class ProductosVistaPageModule {}
