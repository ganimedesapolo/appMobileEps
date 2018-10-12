import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaLineaPage } from '../oferta-linea/oferta-linea';

/**
 * Generated class for the OfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ofertas',
  templateUrl: 'ofertas.html',
})
export class OfertasPage {

//  codigoPais=window.localStorage['codigoPais']; 
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  cargarOfertas(idLineaOferta){
    this.navCtrl.push(OfertaLineaPage,{idLineaOferta:idLineaOferta});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertasPage');
  }

}
