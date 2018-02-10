import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalformPage } from './modalform';

@NgModule({
  declarations: [
    ModalformPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalformPage),
  ],
})
export class ModalformPageModule {}
