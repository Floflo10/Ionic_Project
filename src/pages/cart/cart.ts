import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Cart } from '../../models/cart';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*this.item.name = data.name;
this.item.price = data.price;
this.item.qty = value; */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: Array<Cart> = new Array<Cart>();
  qty: Array<number> = new Array<number>();
  cost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaService, private cartService: CartServiceProvider, public global: GlobalVarProvider,private storage: Storage) {


    this.storage.forEach( (value, key) => {

      let item: Cart = new Cart();
      console.log("This is the value", value);
      console.log("from the key", key);
      this.pizzaService.getId(parseInt(key)).then(data => {

        item.id = data.id;
        item.name = data.name;
        item.price = data.price;
        item.picture = data.picture;
        item.qty = value;

        this.items.push(item);
        console.log(this.items);
        this.update();
      });

      this.qty.push(value);
      console.log(this.qty);

    })


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }



  debug() {
    this.storage.clear();
  }



  mod() {
    for (var i = 0; i < this.items.length; i++) {
      this.cartService.change(this.items[i].id, this.items[i].qty)
    }
    this.update();

  }



  update() {
    this.cost = 0;
    for (var i = 0; i < this.items.length; i++) {
      this.cost = this.cost + (this.items[i].price * this.items[i].qty)
    }
    console.log(this.cost);
  }

}
