import { Component } from '@angular/core';

@Component({
  selector: 'sg-footer-wrapper',
  templateUrl: './footer-wrapper.component.html',
  styles: ['.center-helper { padding-top: 5px; }']
})
export class FooterWrapperComponent {

  scroll(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

}
