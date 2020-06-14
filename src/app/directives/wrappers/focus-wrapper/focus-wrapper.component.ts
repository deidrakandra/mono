import { Component } from '@angular/core';
import { FormComponent, NdaValidators, ControlsConfig, ValidationMessageService } from '@nda/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './focus-wrapper.component.html'
})
export class FocusWrapperComponent extends FormComponent{

  constructor(public builder: FormBuilder, public validation: ValidationMessageService) {
    super(builder, validation);
  }


  protected loadControlsConfig(): ControlsConfig {
    return {
      clinicalTrialGroup: this.builder.group(
        {
          clinical_trial_ind: [false],
          clinical_trial_id: ['']
        },
        {
          validator: NdaValidators.requiredIf('clinical_trial_ind', 'clinical_trial_id')
        }
      ),
      existingSourceGroup: this.builder.group(
        {
          data_source_ind: [],
          data_source_desc: ['']
        },
        {
          validator: NdaValidators.requiredIf('data_source_ind', 'data_source_desc')
        }
      ),
      test_ind: [],
      test_input: [],
      test_ta_ind: [],
      test_ta: [],
      test_dp_ind: [],
      test_dp: [],
      test_sel_ind: [],
      test_sel: []
    }
  }

  onSubmit() {}
}
