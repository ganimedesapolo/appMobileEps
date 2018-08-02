import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { OfertaLineaPage } from '../pages/oferta-linea/oferta-linea';
import { ProductosVistaPage } from '../pages/productos-vista/productos-vista';
import { ProductosLineaVistaPage } from '../pages/productos-linea-vista/productos-linea-vista';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OfertaProvider } from '../providers/oferta/oferta';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OfertasPage,
    OfertaLineaPage,
    ProductosVistaPage,
    ProductosLineaVistaPage,
    LoginPage
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
    ListPage,
    OfertasPage,
    OfertaLineaPage,
    ProductosVistaPage,
    ProductosLineaVistaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OfertaProvider
  ]
})
export class AppModule {}
