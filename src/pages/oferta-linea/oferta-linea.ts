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
  dataUsuario;
  codigoPais;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public proveedor:OfertaProvider
              ) {
    this.idLineaOferta=navParams.data.idLineaOferta;
  }


  

  ionViewDidLoad() {
  
  //obtner datos usuario almacenamiento local
  this.dataUsuario=JSON.parse(window.localStorage['userData'] || '[]'); 
  console.log(this.dataUsuario.data.name)
  
  //obtener codigo pais almacenamiento local
  this.codigoPais=window.localStorage['codigoPais']; 

   ///obtener ofertas con codigo pais
               //obtener ofertas via api 
      this.proveedor.obtenerDatosOfertas(this.idLineaOferta,this.codigoPais)
      .subscribe(
          (data)=>{this.ofertas=data; console.log(data);},
          (error)=>{console.log(error);}
      )  

    
 }

}
