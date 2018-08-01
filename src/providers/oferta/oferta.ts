import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/*
  Generated class for the OfertaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfertaProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello OfertaProvider Provider');
  }

  obtenerDatosOfertas(idLineaOferta:string){
   return this.http.get('http://ec2-18-218-167-21.us-east-2.compute.amazonaws.com/epsonWeb/desarrolloEps/public/api/ofertaLinea/'+idLineaOferta);
  }


 
  obtenerDatosProductos(idLineaProducto:string){
    return this.http.get('http://ec2-18-218-167-21.us-east-2.compute.amazonaws.com/epsonWeb/desarrolloEps/public/api/productoLinea/'+idLineaProducto);
   }

}
