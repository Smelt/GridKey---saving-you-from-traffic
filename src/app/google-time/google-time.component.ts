import { Component, OnInit, ElementRef } from '@angular/core';

import { GoogleMapsApiService} from '../services/google-maps-api.service';
import { Headers, Http, Response } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-google-time',
  templateUrl: './google-time.component.html',
  styleUrls: ['./google-time.component.css']
})
export class GoogleTimeComponent implements OnInit {
  public isLinear = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;


  constructor(private mapsService: GoogleMapsApiService, private _formBuilder: FormBuilder) { }



  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmitLoc(form: NgForm) {
      const origin = form.value.origin;
      const destination = form.value.destination;
    this.mapsService.currentTimeCheck(origin, destination).subscribe((response: Response) => {
      const travelTime3 = response.json();
      console.log('Travel time 3 ' + travelTime3.duration);
    });

  }

}
