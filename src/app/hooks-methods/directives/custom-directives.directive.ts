import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]',
})
export class CustomDirectivesDirective {
  // custom attribute directive using HostBinding method
  //@HostBinding('style.backgroundColor') elementbackground: string = 'blue';
  @Input() color: string = 'white';
  @HostBinding('style.Color') elementColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // custom attribute directive using native element
    // (this.element.nativeElement as HTMLElement).style.backgroundColor =
    //   'purple';
    // custom attribute directive renderer method
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.elementColor = this.color;
  }
  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'violet'
    );
  }
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'purple'
    );
  }
}
