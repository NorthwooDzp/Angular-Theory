import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: string;

  constructor(private heading: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // console.log(this.heading);
    /*const element = this.heading.nativeElement;
    element.style.backgroundColor = 'lightgreen';*/
    this.background = 'lightblue';
    this.renderer.addClass(this.heading.nativeElement, 'white-text');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = 'blue';
  }

  @HostListener('mouseleave') mouseLeave() {
    const {nativeElement} = this.heading;
    this.renderer.setStyle(nativeElement, 'background-color', 'gold');
  }
}
