import { Component, Input } from '@angular/core';

@Component({
  selector: 'nda-labeled-control',
  templateUrl: './labeled-control.component.html'
})
export class LabeledControlComponent {

  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() errorMsg: string;

}
