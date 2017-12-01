import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public carName = `Ford`;
  public carYear = 2011;

  /*getName () {
    return this.carName;  //not need
  }*/

  constructor() {
  }

  ngOnInit() {
  }

}
