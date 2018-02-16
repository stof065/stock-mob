import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the PanierItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'panier-item',
  templateUrl: 'panier-item.html'
})
export class PanierItemComponent {

  @Input() panierItem: PanierItem = new PanierItem

  constructor(private view: ViewController, private navCtrl: NavController, params: NavParams) {
    this.panierItem = params.get("produit");

  }

  addPanierItem() {
    this.view.dismiss(
      { "panierItem": this.panierItem }
    );

  }

  clearPanierItem() {
    this.panierItem.prix = null;
    this.panierItem.quantite = null;

  }

  closeAndClearModal() {
    this.clearPanierItem();
    this.navCtrl.pop();
  }

}

export class PanierItem {

  marque: String;
  reference: String;
  prix: Number;
  quantite: Number;

}
