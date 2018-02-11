import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
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
   id: number;

   constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private camera:Camera, private pizzaService: PizzaService, public formBuilder: FormBuilder,  public global: GlobalVarProvider) {

     this.id = navParams.get('id');

     console.log(this.pizza);

     this.pizzaForm = formBuilder.group({
       name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
       desc: ['', Validators.compose([Validators.required])],
       picture: ['', Validators.compose([Validators.required])],
       price: ['', Validators.compose([Validators.required])]
     });

     if (this.global.change == true)
     {
       this.pizzaService.getId(this.id).then(data => {
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

   options: CameraOptions = {
     quality: 100,
     correctOrientation: true,
     destinationType: this.camera.DestinationType.DATA_URL,
     encodingType: this.camera.EncodingType.JPEG,
     mediaType: this.camera.MediaType.PICTURE
   }


   takePicture(){
     this.camera.getPicture(this.options).then((imageData) => {
       this.pizza.picture =  'data:image/jpeg;base64,' + imageData;
     }, (err) => {
       console.log(err);
     });


   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad ModalformPage');
   }


   onSubmit(value: any): void {
     this.pizza.name = value.name;
     this.pizza.desc = value.desc;
     this.pizza.price = value.price;

     if (this.global.change == true)
     {
       console.log(this.id);
       this.pizzaService.put(this.id, this.pizza);
       console.log("Je me sens différente...")
       this.dismiss();
     }

     else if (this.global.change == false) {
       this.pizzaService.post(this.pizza);
       console.log("Je suis une nouvelle pizza ajoutée !")
       this.dismiss();
     }

   }

   dismiss() {
     this.viewCtrl.dismiss();
   }

 }
