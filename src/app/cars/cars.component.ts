import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  addCarStatus = false;
  /*inputText = ``;
  input2Text = ``;
  input3Text = ``;
  input4Text = ``;*/
  carName = ``;
  carYear = 2011;
  cars2 = [`BMW`, `Audi`, `Toyota`, `Lexus`, `Lada`, `ZaZ`, `Mazda`];

  constructor() {
  }

  cars: [{ name: string, year: number }] = [
    {
      name: 'Ford',
      year: 2017
    }, {
      name: 'Audi',
      year: 2010
    }, {
      name: `Lada`,
      year: 2016
    }];

  addCar() {
    this.addCarStatus = true;
    const newCar: { name: string, year: number } = {name: ``, year: 0};
    newCar.name = this.carName;
    newCar.year = this.carYear;
    this.cars.push(newCar);
    this.carName = ``;
    this.carYear = 2017;
  }

  /* onKeyUp(event: Event) {
     // console.log(event);
     this.inputText = (<HTMLInputElement>event.target).value;
   }*/

  ngOnInit() {
  }

  /* onInput3(str) {
     this.input3Text = str.value;
   }

   onInput4(event) {
     this.input4Text = event.target.value;
   }*/

}
