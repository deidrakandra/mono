import { Component } from '@angular/core';
import { ConfigKey, ConfigurationService, ErrorMessageService } from '@nda/angular';

@Component({
  selector: 'sg-error-wrapper',
  templateUrl: './error-wrapper.component.html'
})
export class ErrorWrapperComponent {

  displayTimeout: number;

  hilariousMsgs = [
    'CPU stack overflow error in the Flux capacitor on the I/O chain of the storage bus port WTF creating a Quantum Matrix threshold of div/0',
    'Error code id-10-t, failure of the keyboard actuator. Replace actuator unit in chair to continue',
    'Dereferenced, non-static configuration interrupt',
    'External, non-static configuration error, restart your computer',
    'Deprecated, asynchronous checksum unavailability.',
    'Asynchronous, legacy encryption invalidation',
    'Deprecated, static request dereferencing',
    'Intermittent, permanent decryption condition',
    'Multiple, aborted programming interruption',
    'Unfiltered, deprecated precondition dereferencing',
    'Non-Replicated unreplicatable synchronisation desynchronisation',
    'Serious, redundant software reclock',
    'Major, multiplexed backplane dump',
    'Unsupported, bidirectional comms invalidation',
    'Hot, unsupported context warning',
    'External, bidirectional comms glitch',
    'Unvalidated, redundant software signal',
    'Invalid, fatal media override',
    'Multiple, unregistered timing infection',
    'Undiagnosable, delayed gateway corruption',
    'Asynchronous, non-replicated bus condition',
  ];

  constructor(
    private config: ConfigurationService,
    private error: ErrorMessageService
  ) {
    this.displayTimeout = config.lookupNumber(ConfigKey.ERROR_TIMEOUT);
  }

  showError() {
    const index = Math.floor(Math.random() * this.hilariousMsgs.length);
    this.error.displayErrorMessage(this.hilariousMsgs[index])
  }

  duplicateError() {
    this.error.displayErrorMessage('Common error encountered');
  }
}
