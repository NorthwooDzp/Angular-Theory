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
  carYear = ``;

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
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
