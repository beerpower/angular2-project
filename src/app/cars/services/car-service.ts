import {Injectable} from "@angular/core";
import {Car} from "../models/car";
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
  private carsAPIkey:string = 'd3v5gp5jerwvtx58a52pjrb9';
  private carsAPIurl:string = 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=' + this.carsAPIkey;
  private cars:Array<Car> = [];


  constructor(private http: Http) {
  }

  getCars():Array<Car> {
      this.getCarsFromURL();
      return this.cars;
  }

  mapCars(res) {
    var cars = res.json().makes;
    for(let car of cars){
      this.cars.push(new Car(car));
    }
  }


  getCarsFromURL() {
    this.http.get(this.carsAPIurl).toPromise().then( response => this.mapCars(response));
  }

}
