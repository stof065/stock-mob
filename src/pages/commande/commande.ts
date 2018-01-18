import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConfigConstantes } from '../../config/Config';
import { DatePipe } from '@angular/common';
import { CommandeDetailPage } from '../commande-detail/commande-detail';

/**
 * Generated class for the CommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commande',
  templateUrl: 'commande.html',
})
export class CommandePage {


  commandes: Commande[] = [];

  selectedCommande: Commande;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private datePipe: DatePipe
    ,
    private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandePage');
    this.commandes = [];
    // fetch list commande
    let options = new RequestOptions;
    options.headers = new Headers();
    options.headers.append("Authorization", "Bearer" + window.localStorage.getItem("token"));
    this.http.get(ConfigConstantes.apiServerEndPoint + "commandes/all", options).subscribe(res => {
      console.log(res);
      res.json().forEach(element => {
        let commande = new Commande();
        commande.id = element.id;
        commande.dateCommande = this.datePipe.transform(element.dateCommande, "M/d/yy");
        commande.statusCommande = element.statusCommande;
        commande.description = element.description;

        this.commandes.push(commande)

      });

    });
  }

  ajouterCommande() {

    console.log("ajouter la commande");

  }

  selectCommande(commande) {
    this.selectedCommande = commande;
    // display commande detail
    this.navCtrl.push(CommandeDetailPage,{commande : this.selectedCommande}) ;

  }

  rechercherCommande() {
    console.log("rechercher Commande");

  }

}

export class Commande {
  id: Number;
  dateCommande: String;
  description: String;
  statusCommande: String;
}
