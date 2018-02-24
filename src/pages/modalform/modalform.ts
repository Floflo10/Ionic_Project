import { Component,  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
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
   public ingre = [{value: <String>('Ingredient de Base')}];


   constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private camera:Camera, private pizzaService: PizzaService, public formBuilder: FormBuilder,  public global: GlobalVarProvider, private toastCtrl: ToastController) {

     this.id = navParams.get('id');

     console.log(this.pizza);

     this.pizzaForm = formBuilder.group({
       name: ['', Validators.compose([Validators.required, Validators.pattern('.*\\S.*[a-zA-z_-]')])],
       desc: ['', Validators.compose([Validators.required])],
       picture: [''],
       price: ['', Validators.compose([Validators.required, Validators.min(0)])],
       ingredients: ['']
     });

     if (this.global.change == true)
     {
       this.pizzaService.getId(this.id).then(data => {
         this.pizza = data;
         console.log(this.pizza);
         this.ingre.length = 0;

         for(var z in this.pizza.ingredients) {
           this.ingre.push({
             value: this.pizza.ingredients[z]
           });
         }
         this.pizzaForm = formBuilder.group({
           name: [this.pizza.name, Validators.compose([Validators.required, Validators.pattern('.*\\S.*[a-zA-z_-]')])],
           desc: [this.pizza.desc, Validators.compose([Validators.required])],
           picture: [''],
           price: [this.pizza.price, Validators.compose([Validators.required, Validators.min(0)])],
           ingredients: ['']
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


   addIngre() {
     this.ingre.push({value: 'Nouvel Ingredient'});
   }

      removeIngre(index) {


    if(index > -1){
      this.ingre.splice(index, 1);
    }

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
     this.pizza.ingredients = [];

     for(var z in this.ingre) {
       this.pizza.ingredients[z] = this.ingre[z].value;
       console.log("PIZZA: " + this.pizza.ingredients[z]);
       console.log("INGRE: " + this.ingre[z].value);
     }

     if (this.global.change == true)
     {
       console.log(this.id);
       this.pizzaService.put(this.id, this.pizza);

       console.log("Je me sens différente...")
       this.toaster('Modifications prisent en compte !');
       console.log("ENVOIE: " + this.pizza.ingredients);
       this.dismiss();
     }

     else if (this.global.change == false) {
       this.pizzaService.post(this.pizza);
       console.log("Je suis une nouvelle pizza ajoutée !")
       console.log("ENVOIE: " + this.pizza.ingredients);
       this.toaster('Nouvelle pizza ajoutée !');
       this.dismiss();
     }



   }

   dismiss() {
     this.viewCtrl.dismiss();
   }

   toaster(text) {
     this.toastCtrl.create({
       message: text,
       duration: 4000,
       position: 'bottom'
     }).present();

   }

 }
