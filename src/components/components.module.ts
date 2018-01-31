import { NgModule } from '@angular/core';
import { ProduitComponent } from './produit/produit';
import { PanierItemComponent } from './panier-item/panier-item';
@NgModule({
	declarations: [ProduitComponent,
    PanierItemComponent],
	imports: [],
	exports: [ProduitComponent,
    PanierItemComponent]
})
export class ComponentsModule {}
