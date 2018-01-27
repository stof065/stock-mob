import { Component ,Input , Output} from '@angular/core';

/**
 * Generated class for the ProduitComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'produit',
  templateUrl: 'produit.html'
})
export class ProduitComponent {


  @Input() produit = {"logoMarque" : "" , "quantite" : "200", "urlReference" : "","reference" : ""} ;

  constructor() {
    console.log('Hello ProduitComponent Component');
   
  }

}
