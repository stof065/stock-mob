import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Commande } from '../commande/commande';
import { CustomHttpService } from '../../config/http/CustomHttp';
import { ConfigConstantes } from '../../config/Config';

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

  commande: Commande;

  commandeDetails: CommandeDetail[] = [];

  client: Client = new Client;

  constructor(public navCtrl: NavController, public navParams: NavParams, private customHttp: CustomHttpService) {
    this.commande = navParams.get("commande");

    customHttp.get(ConfigConstantes.apiServerEndPoint + "detailcommandes/" + this.commande.id + "/all")
      .subscribe(res => { console.log(res); })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandeDetailPage');
    console.log(this.commande);
    // fetch client
    this.customHttp.get(ConfigConstantes.apiServerEndPoint + "commandes/" + this.commande.id + "/client")
      .subscribe(res => {
        this.client = res.json();
        console.log(this.client);
      })
    //
  }

  doInfinite(event) {

    this.customHttp.get(ConfigConstantes.apiServerEndPoint + "detailcommandes/" + this.commande.id + "/all")
      .subscribe(res => {
        // init command detail 
        this.commandeDetails = [];
        let i = 0 ; 
        res.json().forEach(cd => {
       
          //this.commandeDetails.push(cd);
          this.commandeDetails[i] = new CommandeDetail ;
          this.commandeDetails[i].produit.marqueLogo  =  cd.produit.reference.marque.logo ;
          this.commandeDetails[i].quantite  = cd.quantite;
          this.commandeDetails[i].prixVente = cd.prixVente;
          this.commandeDetails[i].produit.marqueLibelle  = cd.produit.reference.marque.libelle ;
          this.commandeDetails[i].produit.reference  = cd.produit.reference.referenceId ;
          this.commandeDetails[i].produit.imageUrl  = cd.produit.reference.url ;
          i++ ;
          console.log(this.commandeDetails[i]);

        });

        console.log(this.commandeDetails);

      }, err => { }, () => {
        console.log("end async call");
        event.complete();
      })

  }


  selectCommandeDetail(cd){
    console.log(cd) ; 
  }

}


export class Client {

  id: Number;
  nom: String;
  prenom: String;
  cin: String;
  dateNaissance: String;
}

export class CommandeDetail {
  id: Number;
  quantite: Number;
  prixVente: Number;
  produit: Produit = new Produit();
}

export class Produit {
  marqueLibelle: String;
  marqueLogo : String ;
  reference: String;
  imageUrl : String ;
}
