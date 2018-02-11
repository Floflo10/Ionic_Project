import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { ModalformPage } from '../modalform/modalform';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  items: Array<Pizza> = new Array<Pizza>();
  item: Pizza;
  public qty: number = 0;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private cartService: CartServiceProvider, private pizzaService: PizzaService, public global: GlobalVarProvider, private storage: Storage) {

    this.update();
    console.log(this.items);

  }

  update() {
    this.pizzaService.get().then(data => {
      this.items = data;
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

  suppr(id: number) {
    this.pizzaService.delete(id).then(bloup => this.update());
    console.log("NOOOOONNN JE FOOONNNDDDD !");
  }

  addCart(id: number, qty: number) {
    this.cartService.add(id, qty);
  }



}
