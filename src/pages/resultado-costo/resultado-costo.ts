import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadoCostoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-costo',
  templateUrl: 'resultado-costo.html',
})
export class ResultadoCostoPage {
  modeloImpresora:string;
  costoTinta;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.modeloImpresora = navParams.get('modeloImpresora');
    this.costoTinta =  navParams.get('costoTinta');
    console.log(this.modeloImpresora)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoCostoPage');
  }

}
