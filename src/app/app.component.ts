import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { AcceuilPage } from '../pages/acceuil/AcceuilPage';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommandePage } from '../pages/commande/commande';
import { ReferencePage } from '../pages/reference/reference';
import { LoginPage } from '../pages/login/login';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  apiServerEndPoint: String = "http://localhost:8080/cabinet/services/";

  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = AcceuilPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,private http : Http
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Clients', component: AcceuilPage },
      { title: 'Fournisseurs', component: ListPage },
      { title: 'Commande', component: CommandePage },
      { title: 'Reference Marque', component: ReferencePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


  // check username is authenticated and token is valid
  if (window.localStorage.getItem("token") != null) {
    
          let options = new RequestOptions ; 
          options.headers = new Headers() ; 
          options.headers.append("Authorization","Bearer" + window.localStorage.getItem("token") ) ; 
          // check with rest /me
          this.http.get(this.apiServerEndPoint + "login/me",options).subscribe(res => {
            console.log("redirection ...");
            this.rootPage = AcceuilPage ;
    
    
          }, error => {
            console.log("error stay in this page");
          });
        }
    
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
