import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommandeDetail } from '../commande-detail/commande-detail';

/**
 * Generated class for the CreateCommandePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-commande',
  templateUrl: 'create-commande.html',
})
export class CreateCommandePage {


  commandeDetails : CommandeDetail[]  = []  ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let cd = new CommandeDetail ; 
    cd.prixVente = 1200   ; 
    cd.quantite = 500 ;
    this.commandeDetails.push(cd) ; 
    console.log('ionViewDidLoad CreateCommandePage');
  }

  editCommandeDetail(cd : CommandeDetail){
    console.log(cd);
    // add this stuff in new page or modal
  }

  removeCommandeDetail(cd : CommandeDetail){
   
    this.commandeDetails.splice(this.commandeDetails.indexOf(cd),1) ;
  }

}
