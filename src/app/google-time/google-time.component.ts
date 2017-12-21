import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoogleMapsApiService} from '../services/google-maps-api.service';


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
      const travelTime = this.mapsService.currentTimeCheck(origin, destination);
  }

}
