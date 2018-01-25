import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import {AcceuilPage} from '../acceuil/AcceuilPage'
import { MyApp } from '../../app/app.component';
import { DEFAULT_PACKAGE_URL_PROVIDER } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { Loading } from 'ionic-angular/components/loading/loading';

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



  apiServerEndPoint: String = "http://localhost:8080/cabinet/services/";

  cridentiel: Cridentiel;

  public static loading : boolean = false ;

  loading =false ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.cridentiel = new Cridentiel;
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
    console.log(LoginPage.loading);
    this.loading = LoginPage.loading ;
    
  
  }

  login() {
    console.log(this.cridentiel);
    this.http.post(this.apiServerEndPoint + "login", this.cridentiel).subscribe(
      res => {
      console.log(res.text())

        if (res.ok) {
          window.localStorage.setItem("token",  res.text());
          this.navCtrl.setRoot(AcceuilPage);
        }
      }, error => {
        alert(error.json().message);
      }
    );
  }


  clear() {
    this.cridentiel = new Cridentiel;

  }


}


export class Cridentiel {
  username: String;
  password: String;
}