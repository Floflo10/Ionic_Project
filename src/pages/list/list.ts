import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { ModalformPage } from '../modalform/modalform';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  items: Array<Pizza> = new Array<Pizza>();
  item: Pizza;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private pizzaService: PizzaService) {


    this.pizzaService.get().then(data => {
      this.items = data;
    });

/*      this.pizzaService.post().then(data => {
      this.item = data;
    }); */

          //this.pizzaService.delete(9);

         // this.pizzaService.put(8);

   /* this.pizzaService.getId(6).then(data => {
      this.item = data;
      console.log(data);
    }); */

  }

  modal() {
    let myModal = this.modalCtrl.create(ModalformPage);
    myModal.present();
  }

}
