import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza'


/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class PizzaService {

    results: string;

    //private readonly url = "http://localhost:8080/pizza/";
    //private readonly url = "http://10.13.0.248:3000/pizza"
    //private readonly url = "http://10.13.0.248:3000/pizza2/";
    private readonly url = "http://kim.jcatania.io:3000/pizza/";
    //private readonly url = "assets/data/pizza.json/";

    constructor(private http: HttpClient) {
      console.log('Hello PizzaServiceProvider Provider');
    }

    sayHello(id: number){
      console.log("sayHello('" + id + "')");
    }

    get() {
      let rt:Array<Pizza> = new Array<Pizza>();
      return new Promise<Array<Pizza>>(resolve => {
        this.http.get(this.url)
        .subscribe((data:Array<any>) => {
          for (let i = 0; i < data.length; i++)
          {
            rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']))
          //data[i]['ingredients'],
        }
        resolve(rt);
        console.log(data);
      });

      });

    //this.http.get(this.url).subscribe(data => {
   //   this.results = data['results'];

 }

 getId(id: number) {

   let rt:Pizza;
   return new Promise<Pizza>(resolve => {
     this.http.get(this.url + id)
     .subscribe((data:any) => {
       rt = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price']);
       resolve(rt);
     });

   });

 }

 post(postParam: Pizza) {

/*   let postParam = {
     name: 'ras',
     desc: 'teau',
     picture: 'Je suis une photo',
     price: 80,
     ingredients: ['test', 'ouille']
   } */

   let rt:Pizza;
   return new Promise<Pizza>(resolve => {
     this.http.post(this.url, postParam, {
       headers: new HttpHeaders().append( 'Content-Type', 'application/json' ),})
     .subscribe((data:any) => {
       rt = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price']);
       resolve(rt);
     });

   });

 }

 put(id: number) {

   let postParam = {
     name: 'res',
     desc: 'teau',
     picture: 'Je suis une photo qui vouille',
     price: 80,
     ingredients: ['test', 'mouille']
   }

   let rt:Pizza;
   return new Promise<Pizza>(resolve => {
     this.http.put(this.url + id, postParam, {
       headers: new HttpHeaders().append( 'Content-Type', 'application/json' ),})
     .subscribe((data:any) => {
       rt = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price']);
       resolve(rt);
     });

   });

 }


 delete(id: number){
   return new Promise<Pizza>(resolve => {
     this.http.delete(this.url + id)
     .subscribe((data:any) => {
       resolve();
     });
   });

 }

}
