import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';

/**
 * Generated class for the ModalCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalcard',
  templateUrl: 'modalcard.html',
})
export class ModalCardPage {

   pizza : Pizza = new Pizza();
   id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaService) {

         this.id = navParams.get('id');

      this.pizzaService.getId(this.id).then(data => {
         this.pizza = data;
         console.log(this.pizza);

     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCardPage');
  }

}
