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





  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 62, 63, 56, 55, 56, 53, 59, 63, 60, 54, 50, 60, 62, 63, 65, 63, 51, 50, 49, 48], label: 'Unloaded' }
  ];
  public lineChartLabels: Array<any> = ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
   '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00'];
  public lineChartOptions: any = {
    responsive: true,
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
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
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

      for (let i = 0; i < 3; i++) {
        const t = travelArr[i];
       // console.log('Time Format ' + t.timeStr + ' Commute Time: ' + t.commuteTime + ' Commute Seconds ' + t.commuteSeconds + " " + i);
      }
      for (let i = 0; i < travelArr.length - 1; i++) {
        commuteTimeMinutes.push(travelArr[i].commuteMinutes);
      }

      for (let i = 0; i < travelArr.length; i += 1) {
        departureTimes.push(travelArr[i].timeStr);
      }
      this.lineChartLabels = departureTimes;
      this.lineChartData[0].data = commuteTimeMinutes;
      this.lineChartData[0].label = "Commute";
    });

  }

  constructor(private mapsService: GoogleMapsApiService) { }

  ngOnInit() {

  }




}
