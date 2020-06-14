import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nda-form-inspector',
  templateUrl: './form-inspector.component.html'
})
export class FormInspectorComponent {

  @Input() form: FormGroup;

  get errors() {
    return {
      form: this.form.errors,
      controls: this._getGroupErrors(this.form)
    };
  }

  _getGroupErrors(group: FormGroup) {
    return Object.keys(group.controls).map((k: string) => {
      const c = group.get(k);
      if ((c as FormGroup).controls) {
        return {
          [k]: c.errors,
          controls: this._getGroupErrors(c as FormGroup)
        };
      } else {
        return { [k]: c.errors };
      }
    });
  }
}
