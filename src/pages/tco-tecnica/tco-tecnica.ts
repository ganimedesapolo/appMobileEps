import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TcoTecnicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tco-tecnica',
  templateUrl: 'tco-tecnica.html',
})
export class TcoTecnicaPage {
  costoTinta;
  resolucion=360;
  cobertura;
  resultado;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TcoTecnicaPage');
  }


  calcularTcoSublimacion(){
    let capacidadCartucho = 700;
    let costoTintaOriginalml=this.costoTinta/capacidadCartucho; 
    let coberturaCalculo;
    let costoTintOriginalM2;

    if(this.resolucion==360){
      if(this.cobertura==0.15) coberturaCalculo = 1.87;
      if(this.cobertura==0.45)  coberturaCalculo = 6.02;
      if(this.cobertura==0.13)  coberturaCalculo = 1.2;
          }

    if(this.resolucion==720){
      if(this.cobertura==0.2) coberturaCalculo = 5.41;
      if(this.cobertura==0.6)  coberturaCalculo = 13.41;
    }

    costoTintOriginalM2 = coberturaCalculo*costoTintaOriginalml;

    this.resultado = costoTintOriginalM2;

    

     console.log("cobertura calculo"); 
     console.log(coberturaCalculo);
     console.log("-----"); 

     console.log(this.costoTinta);
     console.log(this.resolucion);
     console.log(this.cobertura);
     console.log("valor calculo final");
     console.log(costoTintOriginalM2); 


 

}

}