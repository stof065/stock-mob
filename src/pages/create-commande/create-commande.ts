import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommandeDetail } from '../commande-detail/commande-detail';
import { CustomHttpService } from '../../config/http/CustomHttp'
import { ConfigConstantes } from '../../config/Config'

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


  commandeDetails: CommandeDetail[] = [];
  CommandeDetail: CommandeDetail = new CommandeDetail;
  produits = [];
  displayProductList = false ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: CustomHttpService) {
  }

  ionViewDidLoad() {
    let cd = new CommandeDetail;
    cd.prixVente = 1200;
    cd.quantite = 500;
    this.commandeDetails.push(cd);
    console.log('ionViewDidLoad CreateCommandePage');

    this.http.get(ConfigConstantes.apiServerEndPoint + "produits/all").subscribe(res => {
      res.json().forEach(element => {
        this.produits = [];
        this.produits.push({
          "logoMarque": "",
          "reference": element.reference.referenceId, "quantite": element.quantiteStocke, "urlReference": element.reference.url
        })

      });
    })
  }

  editCommandeDetail(cd: CommandeDetail) {
    console.log(cd);
    // add this stuff in new page or modal
  }

  removeCommandeDetail(cd: CommandeDetail) {

    this.commandeDetails.splice(this.commandeDetails.indexOf(cd), 1);
  }

  addCommandeDetail() {


    console.log("clicked !!");
    this.displayProductList = true ;
    this.CommandeDetail = new CommandeDetail;
    // init product list from server 



  }

  selectedProduit(pd) {
    console.log(pd);
  }

}
