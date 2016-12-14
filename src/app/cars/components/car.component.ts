import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Car} from "../models/car";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'car',
    templateUrl: './app/cars/components/car.html'
})
export class CarComponent {
    @Input() car:Car;
    @Output() statusChanged:any = new EventEmitter<any>();

    selectedCarModel:Object;


    selectModel(id:number) {
        console.log(this.car);
        console.log(id);

        this.car.models.filter((unit:Car) => (unit.id == id))
                    .map((unit:Car) => this.selectedCarModel = unit );

                    console.log(this.selectedCarModel);
        // this.task.toggleDone();
        // this.statusChanged.emit(null);
    }
}
