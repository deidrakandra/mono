import { WizardWrapperComponent } from '../wrappers/wizard-wrapper/wizard-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const wizardDetail: Detail = {
  id: 'wizard',
  title: 'Wizard',
  component: WizardWrapperComponent,
  notes: {
    inputs: [
      {
        param: `steps: WizardStep[]`,
        desc: `Ordered array of <code class="highlight">WizardStep</code>s. See notes for <code class="highlight">WizardStep</code> interface details.`
      },
      {
        param: `outlet: string`,
        desc: `Optional. Name of outlet to watch for route changes. Required only when wizard is not based on <code class="highlight">primary</code> outlet`
      }
    ],
    outputs: [],
    example: `<nda-wizard [steps]="wizardSteps"></nda-wizard> `,
    notes: [
      `Use <a href="https://angular.io/guide/router#milestone-5-route-guards" target="_blank" class="link">Route Guards</a> to prevent accessing future wizard steps`,
      `Icon can be an img from an outside src or an icon from FontAwesome`,
      `Typically the <code class="highlight">activeIcon</code> is the same color as the body (<code>#323a45</code>) while the <code class="highlight">futureIcon</code> is the same in a light gray (<code>#929292</code>). This is only required for non-FontAwesome.`,
      `When using a FontAwesome icon, the <code class="highlight">fa-</code> prefix is not required`,
      `If not using FontAwesome, use <code class="highlight">svg</code>`,
      `Page title is set on route change pulling from cms: <code class="highlight">page-title.{{route.data.route}}</code>`,
      `<code class="highlight">index</code> is used to represent the order of the steps. The routes should have a matching index in the route's <code class="highlight">data</code> object. When two routes can represent the same step, e.g. resume and submit in validation tool, use the same index in the <code class="highlight">WizardStep</code> config`,
      `<code class="format">export interface WizardStep {
  route: string;
  title: string;
  index: number;
  activeIcon: string;
  futureIcon?: string;
}</code> `,
      `Configuration for this example:`,
      `<div class="row">
          <div class="col-7">
            <code class="format xsmall-font">
  const <span class="highlight">wizardSteps</span> = [
    {
      title: this.content.lookup('step-title.underpants'),
      activeIcon: "male",
      index: 1
    },
    {
      title: "?",
      activeIcon: "https://s3.amazonaws.com/img/question.svg",
      index: 2
    },
    {
      title: "Profit",
      activeIcon: this.config.lookup('icon.profit'),
      index: 3
    }
  ]
            </code>
          </div>
          <div class="col-5">
            <code class="format xsmall-font">
const <span class="highlight">routes</span>: Routes = [  
  {
    path: 'landing',
    component: EmptyComponent,
    outlet: 'wizard',
    data: {
      route: 'landing',
      index: 0
    }
  },
  {
    path: 'collect',
    component: EmptyComponent,
    outlet: 'wizard',
    data: {
      route: 'collect',
      index: 1
    }
  },
  {
    path: 'question',
    component: EmptyComponent,
    outlet: 'wizard',
    data: {
      route: 'question',
      index: 2
    }
  },
  {
    path: 'double-question',
    component: EmptyComponent,
    outlet: 'wizard',
    data: {
      route: 'double-question',
      index: 2
    }
  },
  {
    path: 'profit',
    component: EmptyComponent,
    outlet: 'wizard',
    data: {
      route: 'profit',
      index: 3
    }
  },
  {
    path: 'complete',
    component: EmptyComponent,
    outlet: 'wizard',
    data: {
      route: 'complete',
      index: 4
    }
  }     
]       
            </code>
          </div>
        </div>

        `
    ]
  }
};