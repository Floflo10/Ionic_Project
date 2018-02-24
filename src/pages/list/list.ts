import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { ModalformPage } from '../modalform/modalform';
import { ModalCardPage } from '../modalcard/modalcard';
import { ToastController } from 'ionic-angular';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  items: Array<Pizza> = new Array<Pizza>();
  qty: Array<number> = new Array<number>();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private cartService: CartServiceProvider, private pizzaService: PizzaService, public global: GlobalVarProvider, private toastCtrl: ToastController) {

    this.update();
  }


  update() {
    this.toaster('Mise à jours en cours...');
    this.pizzaService.get().then(data => {
      this.items = data;

      for(var z in this.items) {
        this.qty[z] = 1;
      }

    });
  }


  add() {
    this.global.change = false;
    let myModal = this.modalCtrl.create(ModalformPage);

    myModal.onDidDismiss(() => {

      this.update();

    });

    myModal.present();
  }


  change(id: number) {
    this.global.change = true;
    let myModal = this.modalCtrl.create(ModalformPage, {id: id});

    myModal.onDidDismiss(() => {

      this.update();

    });

    myModal.present();

  }


  cardDetails(id: number) {
    let myModal = this.modalCtrl.create(ModalCardPage, {id: id});

    myModal.present();

  }


  suppr(id: number) {
    this.pizzaService.delete(id).then(bloup => {
      this.toaster('Pizza Supprimée');
      this.update();
    });

  }


  addCart(id: number, qty: number) {
    if (qty ==  0 || qty == null)
    {
      qty = 1;
    }
    this.cartService.add(id, qty);
    this.toaster('Et Hop ! Dans le panier');
  }

  goCart() {
    this.navCtrl.setRoot(CartPage);
  }


  toaster(text) {
    this.toastCtrl.create({
      message: text,
      duration: 4000,
      position: 'bottom'
    }).present();

  }



}
