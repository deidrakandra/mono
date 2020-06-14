import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent, ControlsConfig, ValidationMessageService, Option } from '@nda/angular';

@Component({
  selector: 'sg-forms-wrapper',
  templateUrl: './forms-wrapper.component.html',
  styleUrls: ['./forms-wrapper.component.scss']
})
export class FormsWrapperComponent extends FormComponent {

  readonly options: Option[] = [
    { value: 'one', label: 'One'},
    { value: 'two', label: 'Two'},
    { value: 'three', label: 'Three'},
  ];

  constructor(public formBuilder: FormBuilder, public validation: ValidationMessageService) {
    super(formBuilder, validation);
  }

  onSubmit() {
    console.log(`SUBMIT SUCCESS: `, this.form.value);
    this.form.reset();
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      textInputOne: ['', Validators.required],
      multiValidation: ['', [
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.required]
      ],
      date: [null, Validators.required],
      emailInput: ['', Validators.email],
      select: [],
      selectTwo: [],
      numberInput: ['', [
        Validators.min(0),
        Validators.max(100)]
      ],
      textArea: ['Initial value defined in ControlsConfig'],
      checkboxOne: [],
      checkboxTwo: [''],
      radio: ['', Validators.required]
    };
  }

}