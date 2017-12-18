import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
/*import {LoggerService} from "./logger.service";*/

@Injectable()
export class CarService {
 /* cars: [{ name: string, year: number, sale: boolean }] = [
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
  ];*/
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getCars(): Observable<any> {
    return this.http.get(this.baseUrl + '/cars');
  }
  /*updateCarList(car: { name: string, year: number, sale: boolean }) {
    this.cars.push(car);
    this.logger.logString(`Added car ${car.name}`);
  }*/

}
