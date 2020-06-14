import { Detail } from '../../shared/detail/detail.model';
import { FormsWrapperComponent } from '../wrappers/forms-wrapper/forms-wrapper.component';

export const formsDetail: Detail = {
  id: 'forms',
  title: 'Reactive Forms',
  component: FormsWrapperComponent,
  patternNotes: {
    pattern: [
      {
        title: `1. Extend <code class="highlight">FormComponent</code> in <code class="highlight">component.ts</code>`,
        example: `import { FormBuilder } from '@angular/forms';
import { FormComponent, ValidationMessageService } from '@nda/angular';

export class FormsWrapperComponent extends FormComponent {
  constructor(
    public builder: FormBuilder,
    public validation: ValidationMessageService
  ) {
    super(builder, validation);
  }
}`,
        notes: [`<code class="highlight">FormComponent</code> provides boilerplate for form setup and basic validation methods`]
      },
      {
        title: `2. Setup form in <code class="highlight">component.html</code>`,
        example: `<form [formGroup]="form" (ngSubmit)="onSubmit()"></form>`,
        notes: [
          `<code class="highlight">form</code> is inherited from <code class="highlight">FormComponent</code>`,
          `Add an <code class="highlight">onSubmit()</code> method to <code class="highlight">component.ts</code> to handle submit`
        ]
      },
      {
        title: `3. Add form elements`,
        notes: [
          `Use <code class="highlight"><a href="/components/input">nda-input</a></code>, <code class="highlight"><a href="/components/textarea">nda-textarea</a></code>, <code class="highlight"><a href="/components/select">nda-select</a></code>, <code class="highlight"><a href="/components/datepicker">nda-datepicker</a></code>`,
          `For checkboxes and radios, use respective inputs`
        ]
      },
      {
        title: `4. Implement abstract method <code class="highlight">loadControlsConfig()</code> to define <code class="highlight">ControlsConfig</code> in <code class="highlight">component.ts</code>`,
        example: `protected loadControlsConfig(): ControlsConfig {
    return {
      textInputOne: ['', Validators.required],
      multiValidation: ['', [
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.required]
      ],
      date: [null, Validators.required]
      emailInput: ['', Validators.email],
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
`,
        notes: [
          `Where each entry is <code class="highlight">formControlName: [ initialValue, validator(s) ]</code>`,
          `<code class="highlight">initialValue</code> can be null, empty string or an actual value. If control has no initial value or validator an empty array can be used.`
        ]
      }, {
        title: `5. Add <code class="highlight">submit</code> button`,
        example: `<button type="submit" class="outline-button" [disabled]="!form.valid">Submit</button>`,
        notes: [
          `Using a button with <code class="highlight">type="submit"</code> automatically submits the form according to the <code class="highlight">(ngSubmit)</code> event handler setup in Step 2`,
          `Use <code class="highlight">[disabled]="!form.valid"</code> to prevent the form submitting when in an invalid state.`
        ]
      }
    ],
    notes: [
      `Need to disable a form control? Use the method on the control to ensure form registers as disabled. <code class="highlight">this.form.get('date').disable()</code>`,
      `Use <code class="highlight">this.resetForm()</code> to clear values after submit`,
      `Have a control with multiple validations? Consider using a <code class="highlight">get</code> method to determine the error message to display <h5><code>component.html</code></h5><pre class="small-font">&lt;div *ngIf="invalid('numberInput')" class="validation-msg">{{ numberErrorMsg }}&lt;/div></pre><h5><code>component.ts</code></h5><pre class="small-font">
get numberErrorMsg(): string {
  const errors: ValidationErrors = this.getInvalidErrors('numberInput');
  if (errors) {
    if (errors.max) {
      return \`Max value of \${errors.max.max}\`;
    } else if (errors.min) {
      return \`Min value of \${errors.min.min}\`;
    }
  }
}</pre>`,
      `<h5>Additional Reactive Form Resources</h5><a target="_blank" href="http://git.nimhda.org/projects/FEF/repos/angular/browse/src/app/patterns/wrappers/forms-wrapper">View example source</a>`,
      `<a target="_blank" href="https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder">Reactive forms documentation</a>`,
      `<a target="_blank" href="https://angular.io/guide/form-validation">Form validation</a>`,
      `<a target="_blank" href="https://angular.io/api/forms/Validators">Built-in validators</a>`
    ]
  }
};