import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HomePage } from '../../pages/home/home';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuLogin:MenuController,public http: HttpClient) {
  }

  ionViewDidLoad() {
    //this.menuLogin.swipeEnable(false);
    console.log('ionViewDidLoad LoginPage');
  }

  ingresar(){
    let userData = {email:this.email,password:this.password};  
    var url = 'http://localhost/epsonApp/public/api/loginViaApi'
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
               if(this.isLogged){
                this.navCtrl.push(HomePage);
                }
             }
    )
  }

}
