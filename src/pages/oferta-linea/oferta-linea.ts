import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaProvider } from '../../providers/oferta/oferta';

/**
 * Generated class for the OfertaLineaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oferta-linea',
  templateUrl: 'oferta-linea.html',
})
export class OfertaLineaPage {
  ofertas;
  idLineaOferta;
  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:OfertaProvider) {
    this.idLineaOferta=navParams.data.idLineaOferta;
  }



  ionViewDidLoad() {
     this.proveedor.obtenerDatosOfertas(this.idLineaOferta)
     .subscribe(
        (data)=>{this.ofertas=data;},
        (error)=>{console.log(error);}
     )
 }

}
