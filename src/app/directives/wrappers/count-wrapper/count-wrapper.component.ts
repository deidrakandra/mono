import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-count-wrapper',
  templateUrl: './count-wrapper.component.html',
  styles: [ 'pre { white-space: unset }']
})
export class CountWrapperComponent implements OnInit {

  exampleOne: string[];
  exampleTwo: string[];

  ngOnInit() {
    this.exampleOne = ['video', 'sandwich', 'chair'];
    this.exampleTwo = null;
  }

}
