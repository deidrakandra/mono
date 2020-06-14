import { Component, Input } from '@angular/core';
import { Param } from './param.model';

@Component({
  selector: 'sg-param',
  templateUrl: './param.component.html'
})
export class ParamComponent {

  @Input() param: Param;

}
