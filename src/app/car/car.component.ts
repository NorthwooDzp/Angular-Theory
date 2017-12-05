import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  @Input('carItem') car: {name: string, year: number};
  // @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;
  /*  public carName = `Ford`;
  public carYear = 2011;*/

  /*getName () {
    return this.carName;  //not need
  }*/


  constructor() {
  }

  ngOnInit() {
    console.log(this.carHeading.nativeElement.innerText);
  }

  /*ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }*/

}
