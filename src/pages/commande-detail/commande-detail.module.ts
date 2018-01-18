import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommandeDetailPage } from './commande-detail';

@NgModule({
  declarations: [
    CommandeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CommandeDetailPage),
  ],
})
export class CommandeDetailPageModule {}
