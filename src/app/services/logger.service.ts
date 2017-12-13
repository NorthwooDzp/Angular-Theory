import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoggerService {

  constructor(private http: Http) { }

  logString (str: string) {
    console.log(str);
  }
  logGet() {
    console.log(this.http.get);
  }

}
