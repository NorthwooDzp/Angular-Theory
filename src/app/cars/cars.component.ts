import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  addCarStatus = ``;
  inputText = ``;
  input2Text = ``;
  input3Text = ``;

  constructor() {
  }

  changeStatus() {
    this.addCarStatus = `Машина добавлена`;
  }

  onKeyUp(event: Event) {
    // console.log(event);
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }
  onInput3(str) {
    this.input3Text = str.value;
  }

}
