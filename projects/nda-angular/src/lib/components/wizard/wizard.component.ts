import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, tap } from 'rxjs/operators';

import { ConfigKey, ConfigurationService, ContentService } from '../../services/services';
import { WizardStep } from './wizard-step/wizard-step.model';

@Component({
  selector: 'nda-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  readonly lastStepWidth: number = 100;
  readonly stepWidth: number = 250;
  readonly stepDefaultWidth: number = 130;
  readonly minStepWidth: number = 150;
  readonly minLineWidth: number = 30;

  @Input() steps: WizardStep[];
  @Input() outlet: string;

  completeIcon: string;
  currentIndex: number;

  connectorWidth: number;

  constructor(
    private content: ContentService,
    private config: ConfigurationService,
    private titleService: Title,
    private el: ElementRef,
    private router: Router,
    private activated: ActivatedRoute
  ) {
    this.completeIcon = this.config.lookup(ConfigKey.COMPLETE_ICON);
  }

  ngOnInit() {
    this.subscribeToRouteChanges();
    this.calculateStepLayout();
    this.handleRouteChange();
  }

  subscribeToRouteChanges() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(() => this.handleRouteChange());
  }

  calculateStepLayout() {
    const fullSteps = this.steps.length - 1;
    const hostWidth = this.el.nativeElement.firstChild.clientWidth;
    const availableSpace = hostWidth - this.lastStepWidth;
    const maxFullSteps = Math.floor((availableSpace)/this.stepWidth);

    if (fullSteps > maxFullSteps) {
      const goalStepWidth = Math.floor(availableSpace / fullSteps);
      if (goalStepWidth > this.minStepWidth) {
        const diff = this.stepWidth - goalStepWidth;
        this.connectorWidth = this.stepDefaultWidth - diff;
      } else {
        this.connectorWidth = this.minLineWidth;
      }
    }
  }

  handleRouteChange() {
    let snapshot = this.activated.snapshot;
    if (this.outlet && snapshot.outlet !== this.outlet && snapshot.children.length > 0) {
      snapshot = snapshot.children.filter((r: ActivatedRouteSnapshot) => r.outlet === this.outlet)[0];
    }
    this.updateRouteState(snapshot);
  }

  updateRouteState(snapshot: ActivatedRouteSnapshot) {
    const routeData = this.getRouteData(snapshot);
    const titleKey = routeData['route'] || 'default';

    this.currentIndex = routeData['index'] || - 1;
    this.titleService.setTitle(this.content.lookup(`page-title.${titleKey}`));

    this.steps.forEach((step: WizardStep) => {
      step['state'] = {
        icon: this.icon(step),
        active: this.active(step),
        complete: this.complete(step),
      };
    });
  }

  getRouteData(snapshot: ActivatedRouteSnapshot) {
    return Object.keys(snapshot.data).length > 0 ? snapshot.data : this.getChildData(snapshot);
  }

  getChildData(snapshot: ActivatedRouteSnapshot) {
    if (snapshot.children && snapshot.children.length > 0) {
      return this.getChildData(snapshot.children[0]);
    } else {
      return snapshot.data || [];
    }
  }

  icon(step: WizardStep): string {
    return this.active(step) ? step.activeIcon : this.complete(step) ? this.completeIcon : (step.futureIcon || step.activeIcon);
  }

  active(step: WizardStep): boolean {
    return this.currentIndex === step.index;
  }

  complete(step: WizardStep): boolean {
    return this.currentIndex > step.index;
  }
}