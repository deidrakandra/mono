import { Component } from '@angular/core';

@Component({
  selector: 'sg-signin-wrapper',
  templateUrl: './signin-wrapper.component.html',
  styleUrls: ['./signin-wrapper.component.scss']
})
export class SigninWrapperComponent {

  event: object = { };

  auth(event) {
    this.event = event;
  }

}
