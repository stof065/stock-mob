import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCommandePage } from './create-commande';

@NgModule({
  declarations: [
    CreateCommandePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCommandePage),
  ],
})
export class CreateCommandePageModule {}
