import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza'


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  items: Array<Pizza> = new Array<Pizza>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaService) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies

    this.pizzaService.get().then(data => {
      this.items = data;
    });

  }



}
