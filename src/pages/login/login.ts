import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HomePage } from '../../pages/home/home';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string;
  password:string;
  isLogged:boolean;
  data:Observable<any>;
  dataResponse;
  latitud;
  longitud;
  resultadoGeocoder;
  codigoPais;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private menuLogin:MenuController,
              public http: HttpClient,
              private nativeGeocoder: NativeGeocoder,
              private geolocation: Geolocation
            ) {


  }

  ionViewDidLoad() {
    //this.menuLogin.swipeEnable(false);
    console.log('ionViewDidLoad LoginPage');
    ///obtener pais del usuario
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };

  ////obtener latitud y longitud y luego con ellas el codigo de pais
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitud =resp.coords.latitude;
    this.longitud=resp.coords.longitude;
    
    this.nativeGeocoder.reverseGeocode(this.latitud, this.longitud, options)
    .then((result: NativeGeocoderReverseResult[]) => { 
            this.resultadoGeocoder= result[0];
            this.codigoPais = result[0].countryCode;
            //almacenar en memoria el codigo del pais
            window.localStorage['codigoPais'] = this.codigoPais;

           }).catch((error: any) => console.log(error));

          }).catch((error) => {
     console.log('Error getting location', error);
   }); 




  }

  ingresar(){
    let userData = {email:this.email,password:this.password};  
    var url = 'http://ec2-18-218-167-21.us-east-2.compute.amazonaws.com/epsonWeb/desarrolloEps/public/api/loginViaApi'
    let postData = new FormData();
    postData.append('email',this.email);
    postData.append('password',this.password);

    this.data = this.http.post(url,postData);
    this.data.subscribe(
      (data)=>{this.dataResponse=data;
               this.isLogged=true;                          
      },
      (error)=>{console.log(error);
                this.isLogged=false; 
                console.log(this.isLogged);   
      },
      () => {  console.log(this.dataResponse); 
               console.log(this.isLogged);  
               window.localStorage['userData'] = JSON.stringify(this.dataResponse);
               if(this.isLogged){
                this.navCtrl.push(HomePage);
                }
             }
    )
  }

}
