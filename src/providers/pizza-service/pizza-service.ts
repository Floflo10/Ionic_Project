import { HttpClient } from '@angular/common/http';
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
    private readonly url = "http://10.13.0.248:3000/ingredients";

    constructor(private http: HttpClient) {
      console.log('Hello PizzaServiceProvider Provider');
    }

    sayHello(id: number){
      console.log("sayHello('" + id + "')");
    }

    get() {
      let rt:Array<Pizza> = new Array<Pizza>();
    this.http.get(this.url).subscribe(data => {
   //   this.results = data['results'];
      console.log(data);
      });

    }

  }
