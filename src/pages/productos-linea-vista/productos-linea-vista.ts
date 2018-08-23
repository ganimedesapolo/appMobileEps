import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaProvider } from '../../providers/oferta/oferta';
import { TcoSublimacionPage } from '../tco-sublimacion/tco-sublimacion';

/**
 * Generated class for the ProductosLineaVistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos-linea-vista',
  templateUrl: 'productos-linea-vista.html',
})
export class ProductosLineaVistaPage {
  productos;
  idLineaProducto;
  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:OfertaProvider) {
   this.idLineaProducto=navParams.data.idLineaProducto;
  }

  ionViewDidLoad() {
    this.proveedor.obtenerDatosProductos(this.idLineaProducto)
    .subscribe(
       (data)=>{this.productos=data;},
       (error)=>{console.log(error);}
    )
    console.log('ionViewDidLoad ProductosLineaVistaPage');
  }


  cargarTcoSublimacion(){
    this.navCtrl.push(TcoSublimacionPage);
  }


}
