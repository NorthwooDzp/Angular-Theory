import {Injectable} from '@angular/core';

@Injectable()
export class CarService {
  cars = [
    {
      name: 'Ford',
      year: 2017,
      sale: false
    }, {
      name: 'Audi',
      year: 2010,
      sale: false
    }, {
      name: `Lada`,
      year: 2016,
      sale: false
    }
  ];

  constructor() {
  }

  getCars() {
    return this.cars;
  }

}
