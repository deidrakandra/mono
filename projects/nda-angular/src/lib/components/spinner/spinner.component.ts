import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { ConfigurationService } from "../../services/lookup/config/configuration.service";
import { SpinnerConfig, SpinnerConfigurations, SpinnerSize, SpinnerType } from "./spinner-type.enum";
import { Defaults } from "../../services/lookup/defaults.enum";

@Component({
  selector: 'nda-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input() type: SpinnerType;
  @Input() show: boolean;

  private spinnerConfig: SpinnerConfig;
  private animation: string;

  constructor(
    private spinner: NgxSpinnerService,
    private config: ConfigurationService
  ) { }

  ngOnInit() {
    this.spinnerConfig = SpinnerConfigurations[this.type];
    this.animation = this.config.lookup(this.spinnerConfig.animationKey);
  }

  ngOnChanges() {
    if (this.show) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }

  get spinnerSize(): string {
    return this.spinnerConfig.spinnerSize || SpinnerSize.DEFAULT;
  }

  get spinnerType(): string {
    return this.animation || Defaults.SPINNER;
  }

  get containerClass(): string {
    return this.spinnerConfig.containerClass;
  }

  get spinnerColor(): string {
    return '#E46C00'; // orange
  }

  get backgroundColor(): string {
    return 'rgba(0, 0, 0, 0.0)';
  }

}
