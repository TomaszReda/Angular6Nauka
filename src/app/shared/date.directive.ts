import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {


  private paragraf;

  @Input()
  private date: string;

  constructor(private el: ElementRef, private render: Renderer2) {
    this.paragraf = this.render.createElement('p');
  }

  @HostListener('mouseenter') onMouseEnter() {

    this.paragraf.innerHTML = 'Wykonano: ' + this.date;
    this.render.setStyle(this.paragraf, 'color', 'red');
    this.render.appendChild(this.el.nativeElement, this.paragraf);

  }

  @HostListener('mouseleave') onMouseLeave() {
    const li = this.el.nativeElement;
    this.render.removeChild(li, this.paragraf);
  }

}
