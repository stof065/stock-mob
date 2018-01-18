import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login'


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class AcceuilPage {
  constructor(private navCtrl : NavController) {

  }

  deconnexion() {
    window.localStorage.removeItem("token");
    this.navCtrl.push(LoginPage);
  }
}
