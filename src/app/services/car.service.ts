import {Injectable} from '@angular/core';

@Injectable()
export class CarService {
  cars: [{ name: string, year: number, sale: boolean }] = [
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


  updateCarList(car: { name: string, year: number, sale: boolean }) {
    this.cars.push(car);
  }

}
