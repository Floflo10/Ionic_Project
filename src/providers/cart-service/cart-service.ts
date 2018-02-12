import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class CartServiceProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello CartServiceProvider Provider');
  }


  add(id: number, qtn: number) {

    if (qtn == 0){}

      else{

        this.storage.get(id.toString()).then(data=> {
          if(data)
          {
            console.log(data);
            let nqtn = parseInt(data) + qtn;
            this.storage.set(id.toString(), nqtn);
          }
          else
          {
            this.storage.set(id.toString(), qtn);
          }
        });

      }
    }


    change(id: number, qtn: number)
    {
      if (qtn == 0){

        this.storage.remove(id.toString());
      }

      else{

        this.storage.set(id.toString(), qtn);
      }

    }

    remove(id: number, qtn: number)
    {

      this.storage.remove(id.toString());

    }

  }


