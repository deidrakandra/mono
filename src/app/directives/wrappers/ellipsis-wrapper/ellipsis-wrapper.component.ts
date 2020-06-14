import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-ellipsis-wrapper',
  templateUrl: './ellipsis-wrapper.component.html',
  styles: []
})
export class EllipsisWrapperComponent implements OnInit {

  sampleText: string;

  ngOnInit() {
    this.sampleText = 'While happily ignoring when being called pose purrfectly to show my beauty but stare out the window yet kitty poochy, cough furball get video posted to internet for chasing red dot for stare at wall turn and meow stare at wall some more meow again continue staring.';
  }

}
