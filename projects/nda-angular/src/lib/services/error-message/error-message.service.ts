import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ErrorMessageService {

  readonly errorMessage: Subject<string>;

  constructor() {
    this.errorMessage = new Subject<string>();
  }

  displayErrorMessage(error: string) {
    this.errorMessage.next(error);
  }

  getErrorMessage(): Observable<string> {
    return this.errorMessage.asObservable();
  }
}
