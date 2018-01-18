import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Commande } from '../commande/commande';

/**
 * Generated class for the CommandeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commande-detail',
  templateUrl: 'commande-detail.html',
})
export class CommandeDetailPage {

  commande : Commande ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.commande = navParams.get("commande");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandeDetailPage');
    console.log(this.commande) ;
  }

}
