import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosLineaVistaPage } from '../productos-linea-vista/productos-linea-vista';

/**
 * Generated class for the ProductosVistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos-vista',
  templateUrl: 'productos-vista.html',
})
export class ProductosVistaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cargarProductos(idLineaProducto){
    this.navCtrl.push(ProductosLineaVistaPage,{idLineaProducto:idLineaProducto});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosVistaPage');
  }

}
