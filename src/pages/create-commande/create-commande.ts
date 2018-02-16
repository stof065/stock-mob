import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommandeDetail } from '../commande-detail/commande-detail';
import { CustomHttpService } from '../../config/http/CustomHttp'
import { ConfigConstantes } from '../../config/Config'
import { Element } from '@angular/compiler';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PanierItemComponent } from '../../components/panier-item/panier-item';

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
  paniers = [];

  validPanierItem = [];


  selectedClient;
  clients = [];
  displayProductList = false;

  displayPanier = true;

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController, public navParams: NavParams, private http: CustomHttpService) {
  }

  ionViewDidLoad() {
    let cd = new CommandeDetail;
    cd.prixVente = 1200;
    cd.quantite = 500;
    // fetch clients
    this.clients = [];

    this.http.get(ConfigConstantes.apiServerEndPoint + "clients/all")
      .subscribe(res => {
        console.log(res);
        res.json().forEach(element => {
          this.clients.push({
            "nom": element.nom, "prenom": element.prenom,
            "cin": element.cin
          });
        });
      });

    this.commandeDetails.push(cd);
    console.log('ionViewDidLoad CreateCommandePage');

    this.http.get(ConfigConstantes.apiServerEndPoint + "produits/all").subscribe(res => {
      this.paniers = [];

      res.json().forEach(element => {
        let produit = {
          "logoMarque": "",
          "reference": element.reference.referenceId, "quantite": element.quantiteStocke, "urlReference": element.reference.url
        };
        this.paniers.push({ "produit": produit, "quantite": "", "prix": "" });

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

  recapCommande() { }

  addCommandeDetail() {


    console.log("clicked !!");
    this.displayProductList = true;
    this.displayPanier = false;
    this.CommandeDetail = new CommandeDetail;
    // init product list from server 



  }

  retourPanier() {
    this.displayProductList = false;
    this.displayPanier = true;
  }

  selectedProduit(pd) {
    console.log(pd);
    let panierItem = this.modalCtrl.create(PanierItemComponent, { "produit": pd });
    panierItem.onDidDismiss(data => {
      if (data.quantite != "" && data.prix != "") {
        this.validPanierItem.push(pd);

      } else {
        // remove item if exist 


      }
    });
    panierItem.present();

  }
  selectClient(event, c) {
    event.path[5].classList.toggle("selected");
    this.selectedClient = c;

  }

}
