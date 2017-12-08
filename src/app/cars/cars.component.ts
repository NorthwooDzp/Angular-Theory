import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  filterName = '';
  // addCarStatus = false;
  /*inputText = ``;
  input2Text = ``;
  input3Text = ``;
  input4Text = ``;*/
  /*carName = ``;
  carYear = 2011;*/

  // cars2 = [`BMW`, `Audi`, `Toyota`, `Lexus`, `Lada`, `ZaZ`, `Mazda`];

  constructor() {
  }

  cars: [{ name: string, year: number, saled: boolean }] = [
    {
      name: 'Ford',
      year: 2017,
      saled: false
    }, {
      name: 'Audi',
      year: 2010,
      saled: false
    }, {
      name: `Lada`,
      year: 2016,
      saled: false
    }
  ];

  /*  changeCarName() {
      console.log('car changed');
      this.cars[0].name = 'Toyota RAV4';
    }*/

  /* addCar() {
     // this.addCarStatus = true;
     this.cars.push({
       name: this.carName,
       year: this.carYear
     });
     this.carName = ``;
     this.carYear = 2017;
   }*/

  /* onKeyUp(event: Event) {
     // console.log(event);
     this.inputText = (<HTMLInputElement>event.target).value;
   }*/

  asyncTitle = Observable.of('Async title in 3 sec').delay(3000);

  ngOnInit() {
  }

  updateCarList(car: { name: string, year: number, saled: boolean }) {
    car.saled = false;
    this.cars.push(car);
  }

  /* onInput3(str) {
     this.input3Text = str.value;
   }

   onInput4(event) {
     this.input4Text = event.target.value;
   }*/

}
