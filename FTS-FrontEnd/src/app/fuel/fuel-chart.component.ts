import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

import {Chart} from 'chart.js';

import {IFuel} from './fuel';
import {FuelDataService} from './fuel-data.service';


@Component({
  selector: 'pm-fuel-chart',
  templateUrl: './fuel-chart.component.html',
  styleUrls: ['./fuel-chart.component.css']
})
export class FuelChartComponent implements OnInit {

  chart:any;
  milage:number[] = new Array();
  price:number[] = new Array();
  

  constructor(private _fuelService:FuelDataService) { }

  ngOnInit() {


  		this._fuelService.getFuelData().subscribe((res: IFuel[]) => {
      res.forEach(y => {
          this.price.push(y.price);
          this.milage.push(y.milage);
        })
      });

      this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.milage,
            datasets: [
              { 
                data: this.price,
                borderColor: "#3cba9f",
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

  	}	



}
