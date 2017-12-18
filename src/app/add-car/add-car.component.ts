import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  // carName = ``;
  // carYear = 2011;
  // @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carNameInput') carName: ElementRef;
  @ViewChild('carYearInput') carYear: ElementRef;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
  }

  addCar() {
    const newCar = {
      name: this.carName.nativeElement.value,
      year: this.carYear.nativeElement.value,
      sale: false
    };
    /*this.carService.updateCarList(newCar);*/
    // this.carName = carName.value;
    /*this.cars.push({
      name: this.carName,
      year: this.carYear
    });*/
    // this.carEmitter.emit({name: carName.value, year: +this.carYear.nativeElement.value});
    // this.carName = ``;
    this.carName.nativeElement.value = ``;
    this.carYear.nativeElement.value = 2017;
  }
}
