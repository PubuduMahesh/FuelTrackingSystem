import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { IFuel } from '../fuel';
import {FuelDataService} from '../fuel-data.service';

@Component({
  selector: 'pm-new-fuel-charge',
  templateUrl: './new-fuel-charge.component.html',
  styleUrls: ['./new-fuel-charge.component.css']
})
export class NewFuelChargeComponent implements OnInit {
  fuel:IFuel;
  constructor(private _fuelService:FuelDataService) {
  	this.fuel = {} as IFuel;
  }

  ngOnInit() {
  
  }

  fuelForm = new FormGroup({
  	price: new FormControl(''),
    milage: new FormControl(''),
  });

  updateFuel() {
  	this.fuel.price = this.fuelForm.value.price;
  	this.fuel.milage = this.fuelForm.value.milage;
  	this._fuelService.updateFuelData(this.fuel);
  }

}
