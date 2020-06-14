import { Component, Input, OnDestroy, OnInit } from "@angular/core";

import { SpinnerType } from "../spinner/spinner-type.enum";

@Component({
  selector: 'nda-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  @Input() contentKey: string;
  spin: boolean;

  ngOnInit() {
    this.spin = true;
  }

  ngOnDestroy() {
    this.spin = false;
  }

  get spinnerType(): string {
    return SpinnerType.LARGE;
  }

  get key(): string {
    return this.contentKey || 'loading.default';
  }
}
