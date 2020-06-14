import { Component, Input, OnInit } from '@angular/core';
import { collapseExpandAnimation } from '../../animations/collapseExpandAnimation';
import { rotate45Animation } from '../../animations/rotateAnimation';

@Component({
  selector: 'nda-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  animations: [collapseExpandAnimation, rotate45Animation]

})
export class CollapsibleComponent implements OnInit {

  @Input() heading: string;

  collapse: boolean;

  ngOnInit() {
    this.collapse = true;
  }

  toggle() {
    if (window.getSelection().isCollapsed) {
      this.collapse = !this.collapse;
    }
  }

}
