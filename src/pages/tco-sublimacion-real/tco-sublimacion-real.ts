import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultadoCostoPage } from '../resultado-costo/resultado-costo';

/**
 * Generated class for the TcoSublimacionRealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tco-sublimacion-real',
  templateUrl: 'tco-sublimacion-real.html',
})
export class TcoSublimacionRealPage {
  costoTinta;
  cobertura;
  tipoCliente;
  resolucion=360;
  resultado;
  resultadoDescuento;
  modeloImpresora:string;
  consumoml;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.modeloImpresora = navParams.get('modeloImpresora');
    console.log(this.modeloImpresora)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TcoSublimacionRealPage');
  }



 
  calcularTcoSublimacionReal(){
    let capacidadCartucho = 1000;
    let costoTintaOriginalml=this.costoTinta/capacidadCartucho; 
    let coberturaCalculo;
    let costoTintOriginalM2;

    if(this.resolucion==360){
      if(this.cobertura==0.2) coberturaCalculo = 1.44;
      if(this.cobertura==0.5)  coberturaCalculo = 4.4;
      if(this.cobertura==0.63)  coberturaCalculo = 6.06;
          }

    if(this.resolucion==720){
      if(this.cobertura==0.2) coberturaCalculo = 1.46;
      if(this.cobertura==0.5)  coberturaCalculo = 8.06;
      if(this.cobertura==0.63)  coberturaCalculo = 9;
    }

    this.consumoml = coberturaCalculo;

    costoTintOriginalM2 = coberturaCalculo*costoTintaOriginalml;

    this.resultado = costoTintOriginalM2;

    if(this.tipoCliente==1) this.resultadoDescuento =(costoTintOriginalM2*1);
    if(this.tipoCliente==2) this.resultadoDescuento = costoTintOriginalM2-(costoTintOriginalM2*0.1);
    if(this.tipoCliente==3) this.resultadoDescuento = costoTintOriginalM2-(costoTintOriginalM2*0.2);
    if(this.tipoCliente==4) this.resultadoDescuento = costoTintOriginalM2-(costoTintOriginalM2*0.3);
    



     console.log("cobertura calculo"); 
     console.log(coberturaCalculo);
     console.log("-----"); 

     console.log(this.costoTinta);
     console.log(this.resolucion);
     console.log(this.cobertura);
     console.log("tipo cliente");
     console.log(this.tipoCliente);
     console.log("valor calculo final");
     console.log(costoTintOriginalM2); 


  if(!isNaN(this.resultado) && this.tipoCliente!=undefined ){    
  this.navCtrl.push(ResultadoCostoPage,{ 'modeloImpresora':this.modeloImpresora,
                                         'resolucion':this.resolucion,
                                         'porcentajeCobertura':this.cobertura,
                                         'consumoml':this.consumoml,
                                         'costoTinta':this.resultado,
                                         'costoTintaDescuento' : this.resultadoDescuento
                                        });
  }


} 

}
