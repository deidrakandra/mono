import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerType } from '@nda/angular';

@Component({
  selector: 'sg-spinner-wrapper',
  templateUrl: './spinner-wrapper.component.html'
})
export class SpinnerWrapperComponent implements OnInit, OnDestroy {

  spin: boolean;

  ngOnInit() {
    this.spin = true;
  }

  ngOnDestroy() {
    this.spin = false;
  }

  toggle() {
    this.spin = ! this.spin;
  }

  get large(): string {
    return SpinnerType.LARGE;
  }

  get small(): string {
    return SpinnerType.SMALL;
  }
}
