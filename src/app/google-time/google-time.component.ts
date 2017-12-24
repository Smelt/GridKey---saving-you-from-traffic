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
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
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

      for (let i = 0; i < this.lineChartData.length; i++) {
        console.log(this.lineChartData[i]);
      }

      for (let i = 0; i < 3; i++) {
        const t = travelArr[i];
        console.log('Time Format ' + t.timeStr + ' Commute Time: ' + t.commuteTime + ' Commute Seconds ' + t.commuteSeconds + " " + i);
      }
      for (let i = 0; i < travelArr.length; i++) {
        departureTimes.push(travelArr[i].timeStr);
        commuteTimeSeconds.push(travelArr[i].commuteSeconds);
      }
      this.lineChartLabels = departureTimes;
      this.lineChartData[0].data = commuteTimeSeconds;
      this.lineChartData[0].label = "Commute";



    });

  }

  constructor(private mapsService: GoogleMapsApiService) { }

  ngOnInit() {
  }




}
