import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  constructor(private heading: ElementRef) {
  }

  ngOnInit() {
    console.log(this.heading);
    const element = this.heading.nativeElement;
    element.style.backgroundColor = 'lightgreen';
  }

}
