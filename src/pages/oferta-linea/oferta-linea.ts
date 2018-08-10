import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaProvider } from '../../providers/oferta/oferta';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


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
  dataUsuario;
  resultadoGeocoder;
  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:OfertaProvider,private nativeGeocoder: NativeGeocoder) {
    this.idLineaOferta=navParams.data.idLineaOferta;
  }




  

  ionViewDidLoad() {

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  
  this.nativeGeocoder.reverseGeocode(4.5072095, -72.1452818, options)
    .then((result: NativeGeocoderReverseResult[]) => this.resultadoGeocoder= JSON.stringify(result[0]))
    .catch((error: any) => console.log(error));



    this.dataUsuario=JSON.parse(window.localStorage['userData'] || '[]'); 
     console.log(this.dataUsuario.data.name)
     this.proveedor.obtenerDatosOfertas(this.idLineaOferta)
     .subscribe(
        (data)=>{this.ofertas=data;},
        (error)=>{console.log(error);}
     )
 }

}
