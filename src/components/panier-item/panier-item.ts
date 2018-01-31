import { Component, Input } from '@angular/core';

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

  @Input() panierItem: PanierItem

  constructor() {
    console.log('Hello PanierItemComponent Component');

  }

  addPanierItem(){}

  clearPanierItem(){}

}

export class PanierItem {

  marque: String;
  reference: String;
  prix: Number;
  quantite: Number;

}
