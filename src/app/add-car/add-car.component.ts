import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carName = ``;
  carYear = 2011;

  constructor() {
  }

  ngOnInit() {
  }

  addCar() {
    /*this.cars.push({
      name: this.carName,
      year: this.carYear
    });*/
    this.carName = ``;
    this.carYear = 2017;
  }
}
