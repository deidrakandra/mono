import { Component } from '@angular/core';

@Component({
  selector: 'sg-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {

  disabled: boolean;

  toggleDisable() {
    this.disabled = !this.disabled;
  }
}