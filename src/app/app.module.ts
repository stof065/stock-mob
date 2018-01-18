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
import { DatePipe } from '@angular/common';
import { CommandeDetailPage } from '../pages/commande-detail/commande-detail';

@NgModule({
  declarations: [
    MyApp,
    AcceuilPage,LoginPage,CommandePage,CommandeDetailPage,
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
    MyApp,CommandeDetailPage,
    AcceuilPage,
    LoginPage,CommandePage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
