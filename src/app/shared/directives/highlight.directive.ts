import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);

  }


  @HostListener('mouseenter')
  onMouseEnter(event: MouseEvent) {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {

    console.log(this.el, color);

    this.el.nativeElement.style.backgroundColor = color;
  }

}
