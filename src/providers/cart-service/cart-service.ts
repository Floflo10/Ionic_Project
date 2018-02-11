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
            this.storage.set(id.toString(), data + qtn);
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


