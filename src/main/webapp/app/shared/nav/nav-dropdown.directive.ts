import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.nav-dropdown'
})
export class NavDropdownDirective {

  constructor(private el: ElementRef) { }

  toggle() {
    this.el.nativeElement.classList.toggle('open');
  }
}


