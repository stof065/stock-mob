import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.cridentiel = new Cridentiel;
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
    // check username is authenticated and token is valid
    if (window.localStorage.getItem("token") != null) {

      let options = new RequestOptions ; 
      options.headers = new Headers() ; 
      options.headers.append("Authorization","Bearer" + window.localStorage.getItem("token") ) ; 
      // check with rest /me
      this.http.get(this.apiServerEndPoint + "login/me",options).subscribe(res => {
        console.log("redirection ...");


      }, error => {

        console.log("error stay in this page");


      });
    }



  }

  login() {
    console.log(this.cridentiel);
    this.http.post(this.apiServerEndPoint + "login", this.cridentiel).subscribe(
      res => {
      console.log(res.text())

        if (res.status == 200) {
          window.localStorage.setItem("token",  res.text());
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