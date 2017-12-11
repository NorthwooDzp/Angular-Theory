import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {CarService} from '../services/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars = [];
  filterName = '';
  // addCarStatus = false;
  /*inputText = ``;
  input2Text = ``;
  input3Text = ``;
  input4Text = ``;*/
  /*carName = ``;
  carYear = 2011;*/

  // cars2 = [`BMW`, `Audi`, `Toyota`, `Lexus`, `Lada`, `ZaZ`, `Mazda`];

  constructor(private carService: CarService) {
  }


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

  // asyncTitle = Observable.of('Async title in 3 sec').delay(3000);

  ngOnInit() {
    this.cars = this.carService.cars;
  }


  /* onInput3(str) {
     this.input3Text = str.value;
   }

   onInput4(event) {
     this.input4Text = event.target.value;
   }*/

}
