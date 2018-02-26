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

  public origin: string;
  public destination: string;
  public morningDeparture: string = '6:00';
  public eveningDeparture: string = '3:00';
  public hoursAtWork: number;
  public distance: number = -1;
  public duration: number = -1;

  // lineChart
  public commuteLengthData: Array<any> = [
    { data: [65, 59, 62, 63, 56, 55, 56, 53, 59, 63, 60, 54, 50, 60, 62, 63, 65, 63, 51, 50, 49, 48], label: 'Minutes' }
  ];
  public timeIntervals: Array<any> = ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
   '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00'];
  public lineChartOptions: any = {
    responsive: true,
    title: {
       display: true,
       text: 'Commute Time'
    },
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          // OR //
          beginAtZero: true   // minimum value will be 0.
        }
      }]
    }
  };

  public lineChartColors: Array<any> = [

    { // grey
      backgroundColor: 'rgba(170, 247, 193, 0.6)',
      borderColor: 'rgb(188, 192, 214)',
      pointBackgroundColor: 'green',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public switchButton() {
    const tempOrigin = this.origin;
    this.origin = this.destination;
    this.destination = tempOrigin;
  }

  public frequentLocationButton(location: string) {
    if ( this.origin === undefined || this.origin.length === 0) {
      this.origin = location;
    }
    else if (this.origin.length === 0 || this.destination === undefined || this.destination.length === 0) {
      this.destination = location;
    }

  }

  onSubmitLoc(form: NgForm) {
    const origin = form.value.origin;
    const destination = form.value.destination;
    this.mapsService.currentTimeCheck(origin, destination).subscribe((response: Response) => {
      const travelObj = response.json();
      const travelArr = travelObj.arr;
      const departureTimes = [];
      const commuteTimeSeconds = [];
      const commuteTimeMinutes = [];
      const commuteTime = [];
      this.distance = travelObj.distance;
      this.duration = travelObj.duration;
      for (let i = 0; i < travelArr.length - 1; i++) {
        commuteTimeMinutes.push(travelArr[i].commuteMinutes);
      }

      for (let i = 0; i < travelArr.length; i += 1) {
        departureTimes.push(travelArr[i].timeStr);
      }
      this.timeIntervals
   = departureTimes;
      this.commuteLengthData[0].data = commuteTimeMinutes;
      this.commuteLengthData[0].label = 'Minutes';
    });

  }

  constructor(private mapsService: GoogleMapsApiService) { }

  ngOnInit() {

  }




}
