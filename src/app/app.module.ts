import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AcceuilPage } from '../pages/acceuil/AcceuilPage';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TooltipModule } from 'angular2-tooltips';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommandePage } from '../pages/commande/commande';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { CustomHttpService } from '../config/http/CustomHttp';
import { CommandeDetailPage } from '../pages/commande-detail/commande-detail';
import { DatePipe } from '@angular/common';
import { CreateCommandePage } from '../pages/create-commande/create-commande';
import {ProduitComponent} from '../components/produit/produit'
import { PanierItemComponent } from '../components/panier-item/panier-item';

@NgModule({
  declarations: [
    MyApp,
    AcceuilPage, LoginPage, CommandePage, CommandeDetailPage,ProduitComponent,
    ItemDetailsPage,CreateCommandePage,PanierItemComponent,
    ListPage
  ],
  imports: [
    HttpModule,TooltipModule,
    BrowserModule,BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,PanierItemComponent,
    AcceuilPage, CommandePage, CommandeDetailPage,CreateCommandePage,
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
