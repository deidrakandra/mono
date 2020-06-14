import { Component, Input, OnInit } from '@angular/core';
import { StepState } from './wizard-step.model';

@Component({
  selector: 'nda-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

  @Input() final: boolean;
  @Input() title: string;
  @Input() connectorWidth: number;

  @Input() state: StepState;

  ngOnInit() {
    this.connectorWidth = this.connectorWidth || 130;
  }

  isIcon(): boolean {
    return this.state.icon.indexOf('http') < 0;
  }

}
