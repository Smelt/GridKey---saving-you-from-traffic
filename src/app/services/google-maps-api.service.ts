import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/finally';


@Injectable()
export class GoogleMapsApiService {

  private serverURL = 'http://localhost:3000';

  constructor(private http: Http) { }

   currentTimeCheck(origin: string, destination: string) {
     // console.log(this.serverURL + '/mapdata/' + origin + '/' + destination);
     return this.http.get(this.serverURL + '/mapdata/' + origin + '/' + destination);

      /*
      const travelTime = response.json();
      console.log(travelTime);
      console.log("TRAVEL TIME");
      return travelTime;
     });

     */

     /*
       .subscribe(
         (response: Response) => {
            console.log("resonse");
         }
       );
  */

  }

}
