import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[focusOn]'
})
export class FocusDirective implements OnChanges {

  @Input('focusOn')
  private focus: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    if (this.focus) {
      setTimeout(() => {
        const input = this.isFocusable() ? this.el.nativeElement : this.findFocusable();
        setTimeout(() => {
          input.focus()
        }, 1);
      }, 1);
    }
  }

  private isFocusable() {
    const nodeName = this.el.nativeElement.nodeName.toUpperCase();
    return nodeName === 'INPUT' || nodeName === 'TEXTAREA' || nodeName === 'SELECT';
  }

  private findFocusable(): HTMLElement {
    return this.el.nativeElement.querySelectorAll('input, textarea, select')[0];
  }
}
