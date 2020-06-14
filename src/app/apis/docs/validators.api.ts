import { Api } from '../../shared/api-docs/api-doc.model';

export const validatorsApi: Api = {
  id: 'validators',
  header: 'NdaValidators',
  title: 'Validators',
  desc: `Static class, access using <code class="highlight">NdaValidators</code>. More about custom validation <a href="https://angular.io/guide/form-validation#custom-validators" target="_blank">here</a>.`,
  docs: [
    {
      method: 'requiredIf(conditional: string, required: string): ValidatorFn',
      desc: `Validates that a value is present in a <code>FormControl</code> when another <code>FormControl</code> value evaluates to true`,
      params: [
        {
          param: 'conditional: string',
          desc: `<code>formControlName</code> of conditional html element. eg, checkbox`
        },
        {
          param: 'required: string',
          desc: `<code>formControlName</code> of required html element. eg, input`
        }
      ],
      returns: `<code><a href="https://angular.io/api/forms/ValidatorFn" target="_blank">ValidatorFn</a></code>`,
      notes: [
        `Dependent controls must be configured as a <code class="highlight"><a href="https://angular.io/api/forms/FormGroup" target="_blank">FormGroup</a></code>`,
        `<h5 class="uppercase">Example</h5>`,
        `<pre class="small-font"><code>protected loadControlsConfig(): ControlsConfig {
  return {
    clinicalTrialGroup: this.builder.group(
      {
        clinical_trial_ind: [0],
        clinical_trial_id: ['']
      },
      {
        validator: NdaValidators.requiredIf('clinical_trial_ind', 'clinical_trial_id')
      }
    )
  }
}</code></pre>`,
        `where <code>clinical_trial_ind</code> is a checkbox and <code>clinical_trial_id</code> is an input`
      ]
    },
    {
      method: 'requiredIfValue(conditional: string, value: any, required: string): ValidatorFn',
      desc: `Validates that a value is present in a <code>FormControl</code> when another <code>FormControl</code> value evaluates to the specified value`,
      params: [
        {
          param: 'conditional: string',
          desc: `<code>formControlName</code> of conditional html element. eg, select`
        },
        {
          param: 'value: any',
          desc: 'Value that conditional must match to be considered required'
        },
        {
          param: 'required: string',
          desc: `<code>formControlName</code> of required html element. eg, input`
        }
      ],
      returns: `<code><a href="https://angular.io/api/forms/ValidatorFn" target="_blank">ValidatorFn</a></code>`,
      notes: [
        `Dependent controls must be configured as a <code class="highlight"><a href="https://angular.io/api/forms/FormGroup" target="_blank">FormGroup</a></code>`,
        `<h5 class="uppercase">Example</h5>`,
        `<pre class="small-font"><code>protected loadControlsConfig(): ControlsConfig {
  return {
    bioGroup: this.builder.group(
      {
        biomedical_select: [''],
        biomedical_repository: ['']
      },
      {
        validator: NdaValidators.requiredIf('biomedical_select', 'other', 'biomedical_repo')
      }
    )
  }
}</code></pre>`,
        `where <code>biomedical_select</code> is a select and <code>biomedical_repo</code> is an input`
      ]
    },
    {
      method: 'requiredIfConditionals(conditionals: Conditional[], required: string): ValidatorFn',
      desc: `Validates that a value is present in a <code>FormControl</code> when a set of <code>Conditional</code> values all evaluates to the specified values`,
      params: [
        {
          param: 'conditionals: Conditional[]',
          desc: `array of <code>Conditional</code>s`
        },
        {
          param: 'required: string',
          desc: `<code>formControlName</code> of required html element. eg, input`
        }
      ],
      returns: `<code><a href="https://angular.io/api/forms/ValidatorFn" target="_blank">ValidatorFn</a></code>`,
      notes: [
        `Dependent controls must be configured as a <code class="highlight"><a href="https://angular.io/api/forms/FormGroup" target="_blank">FormGroup</a></code>`,
        `<pre><code>export interface Conditional {
  conditional: string;
  value: any;
}</code></pre> where <code>conditional</code> is the <code>formControlName</code>`,
        `<h5 class="uppercase">Example</h5>`,
        `<pre class="small-font"><code>protected loadControlsConfig(): ControlsConfig {
  return {
    genomicGroup = this.builder.group(
      {
        genomic_ind: [0],
        genomic_select: [],
        genomic_repository: []
      },
      {
        validator: [
          NdaValidators.requiredIfConditionals(
            [
              { conditional: 'genomic_ind', value: 1 }, 
              { conditional: 'genomic_select', value: 'other' }
            ], 'genomic_repository'
          )
        ]
      }
    )
 }</code></pre>`,
      ]
    },
    {
      method: 'dateBefore(dateBefore: string, dateAfter: string, context: {[p: string]: any}): ValidatorFn',
      desc: 'Validates that dates are in chronological order',
      params: [
        {
          param: 'dateBefore: string',
          desc: `<code>formControlName</code> of date element`
        },
        {
          param: 'dateAfter: string',
          desc: `<code>formControlName</code> of date element`
        },
        {
          param: 'context: {[p: string]: any}',
          desc: `Appropriate context for the validation message such as date labels`
        }
      ],
      returns: `<code><a href="https://angular.io/api/forms/ValidatorFn" target="_blank">ValidatorFn</a></code>`,
      notes: [
        `Dependent controls must be configured as a <code class="highlight"><a href="https://angular.io/api/forms/FormGroup" target="_blank">FormGroup</a></code>`,
        `<h5 class="uppercase">Example</h5>`,
        `<pre class="small-font"><code>protected loadControlsConfig(): ControlsConfig {
  return {
    studyLengthGroup: this.builder.group(
      {
        study_start_date: [''],
        study_end_date: ['']
      },
      {
        validator: NdaValidators.dateBefore('study_start_date', 'study_end_date', {
          dateBefore: 'Begin Date',
          dateAfter: 'End Date'
        })
      }
    ),
 }</code></pre>`,
        `Default validation messages are configured in the <a href="http://52.23.106.58:8080/cms/?1&path=/content/documents/nda-ng-lib/lib-validation" target="_blank">cms</a>`
      ]
    },
  ]
};