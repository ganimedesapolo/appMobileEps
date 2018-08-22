import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { OfertasPage } from '../ofertas/ofertas';
import { ProductosVistaPage } from '../productos-vista/productos-vista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private viewCtrl: ViewController) {

  }

  cargarVistaOfertas(){
    this.navCtrl.push(OfertasPage);
  }

  cargarVistaProductos(){
    this.navCtrl.push(ProductosVistaPage);
  }



  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
}

}
