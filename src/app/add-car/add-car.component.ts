import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  // carName = ``;
  // carYear = 2011;

  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYear: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }

  addCar(carName: HTMLInputElement) {
    // this.carName = carName.value;
    /*this.cars.push({
      name: this.carName,
      year: this.carYear
    });*/
    this.carEmitter.emit({name: carName.value, year: +this.carYear.nativeElement.value});
    // this.carName = ``;
    carName.value = ``;
    this.carYear.nativeElement.value = 2017;
  }
}
