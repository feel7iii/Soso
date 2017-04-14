import { Directive, HostListener } from '@angular/core';

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '.sidebar-toggler',
})
export class SidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-hidden');
  }
}
