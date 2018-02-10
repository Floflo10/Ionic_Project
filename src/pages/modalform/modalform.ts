import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ModalformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalform',
  templateUrl: 'modalform.html',
})
export class ModalformPage {

  public pizzaForm: FormGroup;
  pizza : Pizza = new Pizza();
  test = true;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private pizzaService: PizzaService, public formBuilder: FormBuilder) {


    console.log(this.pizza);

    this.pizzaForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      desc: ['', Validators.compose([Validators.required])],
      picture: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])]
    });

    if (this.test = true)
    {

      this.pizzaService.getId(6).then(data => {
        this.pizza = data;
        console.log(this.pizza);
        this.pizzaForm = formBuilder.group({
          name: [this.pizza.name, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
          desc: [this.pizza.desc, Validators.compose([Validators.required])],
          picture: ['', Validators.compose([Validators.required])],
          price: [this.pizza.price, Validators.compose([Validators.required])]
        });
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalformPage');
  }


    onSubmit(value: any): void {
    this.pizza.name = value.name;
    this.pizza.desc = value.desc;
    this.pizza.price = value.price;

    this.pizzaService.post(this.pizza);


    }

    dismiss() {
    this.viewCtrl.dismiss();
}

}
