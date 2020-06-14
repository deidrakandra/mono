import { Component, Input, Type } from '@angular/core';
import { SectionConfig } from '../../styles/docs/styles.config';


@Component({
  selector: 'sg-section',
  templateUrl: './section.component.html'
})
export class SectionComponent {

  @Input() config: SectionConfig;

  get id(): string {
    return this.config.id;
  }

  get title(): string {
    return this.config.title;
  }

  get component(): Type<any> {
    return this.config.component;
  }
}
