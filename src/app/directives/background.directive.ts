import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  constructor(private heading: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // console.log(this.heading);
    /*const element = this.heading.nativeElement;
    element.style.backgroundColor = 'lightgreen';*/
    this.renderer.setStyle(this.heading.nativeElement, 'background-color', 'lightblue');
    this.renderer.addClass(this.heading.nativeElement, 'white-text');
  }

}
