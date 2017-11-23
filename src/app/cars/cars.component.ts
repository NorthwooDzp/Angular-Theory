import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  canIAdd = false;

  constructor() {
    setTimeout(() => {
      this.canIAdd = true;
    }, 4000);
  }

  ngOnInit() {
  }

}
