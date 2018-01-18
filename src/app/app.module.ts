import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AcceuilPage } from '../pages/acceuil/AcceuilPage';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommandePage } from '../pages/commande/commande';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { CustomHttpService } from '../config/http/CustomHttp';
import { CommandeDetailPage } from '../pages/commande-detail/commande-detail';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    AcceuilPage, LoginPage, CommandePage, CommandeDetailPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcceuilPage, CommandePage, CommandeDetailPage,
    LoginPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    CustomHttpService,DatePipe,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
