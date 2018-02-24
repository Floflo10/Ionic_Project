import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';

import { CartPage } from '../cart/cart';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public global: GlobalVarProvider) {

  }

  goCart() {
    this.navCtrl.setRoot(CartPage);
  }

  user(role: boolean)
  {
    this.global.admin = role;
    this.navCtrl.setRoot(ListPage);
  }


}
