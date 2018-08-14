import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaProvider } from '../../providers/oferta/oferta';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';


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
  latitud;
  longitud;
  resultadoGeocoder;
  codigoPais;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,public proveedor:OfertaProvider,
              private nativeGeocoder: NativeGeocoder,private geolocation: Geolocation) {
    this.idLineaOferta=navParams.data.idLineaOferta;
  }




  

  ionViewDidLoad() {

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  
  //obtner datos usuario almacenamiento local
  this.dataUsuario=JSON.parse(window.localStorage['userData'] || '[]'); 
  console.log(this.dataUsuario.data.name)
  
 //obtener ofertas via api 
 this.proveedor.obtenerDatosOfertas(this.idLineaOferta)
  .subscribe(
     (data)=>{this.ofertas=data; console.log(data);},
     (error)=>{console.log(error);}
  ) 


////obtener latitud y longitud y luego con ellas el codigo de pais
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud =resp.coords.latitude;
      this.longitud=resp.coords.longitude;
      
      this.nativeGeocoder.reverseGeocode(this.latitud, this.longitud, options)
      .then((result: NativeGeocoderReverseResult[]) => { 
              this.resultadoGeocoder= result[0];
              this.codigoPais = result[0].countryCode;
             }).catch((error: any) => console.log(error));

            }).catch((error) => {
       console.log('Error getting location', error);
     }); 
     
   
     
     

    
 }

}
