import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-http-cars',
  templateUrl: './http-cars.component.html',
  styleUrls: ['./http-cars.component.scss']
})
export class HttpCarsComponent implements OnInit {

  constructor(private carService: CarService) {
}

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      console.log(data);
    });
  }

}
