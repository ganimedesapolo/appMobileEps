import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TcoSublimacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tco-sublimacion',
  templateUrl: 'tco-sublimacion.html',
})
export class TcoSublimacionPage {
  costoTinta;
  resolucion;
  cobertura;
  tipoCliente;
  resultado;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TcoSublimacionPage');
  }


  calcularTcoSublimacion(){
    let capacidadCartucho = 1000;
    let costoTintaOriginalml=this.costoTinta/capacidadCartucho; 
    let coberturaCalculo;
    let costoTintOriginalM2;

    if(this.resolucion==720){
      if(this.cobertura==0.17) coberturaCalculo = 1.9;
      if(this.cobertura==0.45)  coberturaCalculo = 4.9;
      if(this.cobertura==0.63)  coberturaCalculo = 6.3;
      if(this.cobertura==0.2)  coberturaCalculo = 2.4;
    }

    if(this.resolucion==1140){
      if(this.cobertura==0.17) coberturaCalculo = 2.6;
      if(this.cobertura==0.45)  coberturaCalculo = 6.3;
      if(this.cobertura==0.63)  coberturaCalculo = 9.8;
      if(this.cobertura==0.2)  coberturaCalculo = 3.1;
    }

    costoTintOriginalM2 = coberturaCalculo*costoTintaOriginalml;



     console.log("cobertura calculo"); 
     console.log(coberturaCalculo);
     console.log("-----"); 

     console.log(this.costoTinta);
     console.log(this.resolucion);
     console.log(this.cobertura);
     console.log(this.tipoCliente);
     console.log("valor calculo final");
     console.log(costoTintOriginalM2); 
     this.resultado = costoTintOriginalM2;

  }




}
