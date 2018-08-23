import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { OfertaLineaPage } from '../pages/oferta-linea/oferta-linea';
import { ProductosVistaPage } from '../pages/productos-vista/productos-vista';
import { ProductosLineaVistaPage } from '../pages/productos-linea-vista/productos-linea-vista';
import { LoginPage } from '../pages/login/login';
import { TcoSublimacionPage } from '../pages/tco-sublimacion/tco-sublimacion';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OfertaProvider } from '../providers/oferta/oferta';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OfertasPage,
    OfertaLineaPage,
    ProductosVistaPage,
    ProductosLineaVistaPage,
    LoginPage,
    TcoSublimacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OfertasPage,
    OfertaLineaPage,
    ProductosVistaPage,
    ProductosLineaVistaPage,
    LoginPage,
    TcoSublimacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OfertaProvider
  ]
})
export class AppModule {}
