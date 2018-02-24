import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { ListPage } from '../list/list';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 @IonicPage()
 @Component({
   selector: 'page-cart',
   templateUrl: 'cart.html',
 })
 export class CartPage {

   items: Array<Pizza> = new Array<Pizza>();
   qty: Array<number> = new Array<number>();
   cost: number;

   constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaService, private cartService: CartServiceProvider, public global: GlobalVarProvider, private storage: Storage, private toastCtrl: ToastController, private localNotifications: LocalNotifications) {

     this.toaster('Mise à jours en cours...');
     this.storage.forEach( (value, key) => {


       let pizza: Pizza = new Pizza();
       this.pizzaService.getId(parseInt(key)).then(data => {

         pizza = data;

         this.items.push(pizza);
         console.log(this.items);
         this.update();
       });

       this.qty.push(value);
       console.log("Tableau: " + this.qty);

     })


   }


   ionViewDidLoad() {
     console.log('ionViewDidLoad CartPage');
   }



   command() {
     this.storage.clear();
     this.update();
     this.toaster('Commande Passé ! Merci pour votre confiance !');
     this.localNotifications.schedule({
       text: 'Votre pizza est arrivé à votre égout le plus proche !',
       icon: '../assets/imgs/logo.jpg',
       at: new Date(new Date().getTime() + 600000),
       led: 'FF0000',
       sound: null
     });
     this.navCtrl.setRoot(ListPage);

   }



   mod() {
     for (var i = 0; i < this.items.length; i++) {

       if (this.qty[i] < 0) {
         this.qty[i] = 0;
       }

       this.cartService.change(this.items[i].id, this.qty[i])
     }
     this.update();

   }



   update() {
     this.cost = 0;
     for (var i = 0; i < this.items.length; i++) {
       this.cost = this.cost + (this.items[i].price * this.qty[i])
     }
   }


   toaster(text) {
     this.toastCtrl.create({
       message: text,
       duration: 4000,
       position: 'middle'
     }).present();

   }

 }
