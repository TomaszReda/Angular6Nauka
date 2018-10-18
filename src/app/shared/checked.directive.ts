import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {

  constructor(el: ElementRef, private render: Renderer2) {
    render.setStyle(el.nativeElement, 'list-style-image', 'url(src/assets/checked.png)');
  }

}
