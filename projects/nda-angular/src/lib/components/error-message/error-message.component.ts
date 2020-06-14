import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from "../../animations/fadeAnimation";
import { ConfigurationService } from "../../services/lookup/config/configuration.service";
import { ConfigKey } from "../../services/lookup/config/config-key.enum";
import { ErrorMessageService } from '../../services/error-message/error-message.service';


@Component({
  selector: 'nda-error',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  animations: [fadeAnimation]
})
export class ErrorMessageComponent implements OnInit {

  public msg: string;
  public display: boolean;
  private timeout: number;

  readonly displayTimeout: number;

  constructor(
    private config: ConfigurationService,
    private error: ErrorMessageService
  ) {
    this.displayTimeout = config.lookupNumber(ConfigKey.ERROR_TIMEOUT);
  }

  ngOnInit(): void {
    this.error.getErrorMessage().subscribe((message: string) => this.show(message));
  }

  show(message: string) {
    this.msg = message;
    this.display = true;
    this.setTimeout();
  }

  hide() {
    this.msg = null;
    this.display = false;
    this.timeout = -1;
  }

  setTimeout() {
    if (this.timeout > -1) {
      window.clearTimeout(this.timeout);
    }
    this.timeout = window.setTimeout(() => this.hide(), this.displayTimeout);
  }
}
