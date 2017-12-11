import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  @Input('carItem') car;
  // @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;
  /*  public carName = `Ford`;
  public carYear = 2011;*/

  /*getName () {
    return this.carName;  //not need
  }*/


  constructor(private logger: LoggerService) {
  }

  ngOnInit() {
    // console.log(this.carHeading.nativeElement.innerText);
  }

  /*ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }*/
  buyCar(status) {
    this.car.sale = status === 'buy' ? true : false;
    this.logger.logString(`${this.car.name} status changed to => ${this.car.sale}`);
  }

  r
}
