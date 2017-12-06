import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground') hoverColor: string;
  @Input() defaultColor: string;
  @HostBinding('style.backgroundColor') background: string;

  constructor(private heading: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // console.log(this.heading);
    /*const element = this.heading.nativeElement;
    element.style.backgroundColor = 'lightgreen';*/
    this.background = 'lightgreen';
    this.renderer.addClass(this.heading.nativeElement, 'white-text');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
    console.log(this.hoverColor);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
    console.log(this.defaultColor);
  }
}
