import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCardPage } from './modalcard';

@NgModule({
  declarations: [
    ModalCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCardPage),
  ],
})
export class ModalCardPageModule {}
