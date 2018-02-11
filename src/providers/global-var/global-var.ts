import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVarProvider {

 public admin: boolean;
 public change: boolean;

  constructor(public http: HttpClient) {

    this.admin = false;
    this.change = false;
    console.log('Hello GlobalVarProvider Provider');


  }

}
