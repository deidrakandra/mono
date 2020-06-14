import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sg-control-wrapper',
  templateUrl: './control-wrapper.component.html'
})
export class ControlWrapperComponent  {

  @Input() form: FormGroup;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() disable: EventEmitter<any> = new EventEmitter<any>();

  result: string;

  onSubmit() {
    this.result = this.form.value;
    this.submit.emit(this.form.value);
  }

  toggleDisable(value) {
    this.disable.emit(value);
  }

  get errors() {
    return Object.keys(this.form.controls).map((k: string) => {
      return { [k]: this.form.get(k).errors };
    });
  }

}
