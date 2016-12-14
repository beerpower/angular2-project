import {Component} from "@angular/core";
import {Car} from "../models/car";
import {OnInit} from "@angular/core";
import {CarService} from "../services/car-service";

@Component({
  selector: 'car-list',
  templateUrl: './app/cars/components/car-list.html',
  providers: [CarService]
})
export class CarListComponent implements OnInit{
  loadCars:boolean = false;
  selectedCar:Car;
  cars:Array<Car>;


  constructor(private _carService:CarService) {
      this.cars = _carService.getCars();

  }

  ngOnInit() {
    console.log(this.cars, this.cars.length)
    this.loadCars = true;
  }


  selectCar(id:number) {
       this.cars.filter((unit:Car) => (unit.id == id))
                   .map((unit:Car) => this.selectedCar = unit );

                   console.log(this.selectedCar);
  }

  // addItem (){
  //   console.log(this.newCar);
  //
  //   if(this.newCar.brand.length && this.newCar.model.length){
  //     this.cars.push(new Car(this.newCar.brand, this.newCar.model));
  //     this.newCar = new Car('', '');
  //   }
  //
  // }
}
