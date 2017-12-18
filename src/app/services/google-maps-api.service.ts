import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/finally';


@Injectable()
export class GoogleMapsApiService {



  constructor() { }

   currentTimeCheck(origin: string, destination: string) {
    console.log(origin + " " + destination) ;

  }

}
