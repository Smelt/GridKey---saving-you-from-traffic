import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoogleMapsApiService} from '../services/google-maps-api.service';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-google-time',
  templateUrl: './google-time.component.html',
  styleUrls: ['./google-time.component.css']
})
export class GoogleTimeComponent implements OnInit {



  constructor(private mapsService: GoogleMapsApiService) { }

  ngOnInit() {
  }

  onSubmitLoc(form: NgForm) {
    const origin = form.value.origin;
    const destination = form.value.destination;
    this.mapsService.currentTimeCheck(origin, destination).subscribe((response: Response) => {
      const travelObj = response.json();
      const travelArr = travelObj.arr;

      for (let i = 0; i < travelArr.length; i++) {
        const t = travelArr[i];
        console.log('Time Format ' + t.timeStr + ' Commute Time: ' + t.commuteTime + ' Commute Seconds ' + t.commuteSeconds);
      }
    });

  }

}
