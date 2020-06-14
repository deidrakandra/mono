import { Component, Input } from '@angular/core';
import { Param } from './param/param.model';

@Component({
  selector: 'sg-param-list',
  templateUrl: './param-list.component.html',
  styleUrls: ['./param-list.component.scss']
})
export class ParamListComponent {

  @Input() params: Param[];

  get notEmpty(): boolean {
    return this.params.length > 0;
  }
}
