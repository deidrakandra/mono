import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../services/lookup/config/configuration.service';
import { MockConfigService } from '../../test/test.fixture';
import { ErrorMessageComponent } from './error-message.component';
import { ErrorMessageService } from '../../services/error-message/error-message.service';
import Spy = jasmine.Spy;
import { of } from 'rxjs';

@Component({
  template: `<nda-error></nda-error>`
})
class TestHostComponent { }

describe('Component: Error', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let errorMsg: string;
  let getMessageSpy: Spy;

  beforeEach(async(() => {
    errorMsg = 'Important Error Message'.toUpperCase();
    const errorService = jasmine.createSpyObj('ErrorMessageService', ['getErrorMessage']);
    getMessageSpy = errorService.getErrorMessage.and.returnValue(of(errorMsg));

    TestBed.configureTestingModule({
        declarations: [ErrorMessageComponent, TestHostComponent],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() },
          { provide: ErrorMessageService, useValue: errorService }
        ],
        imports: [NoopAnimationsModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible when error message is populated', () => {
    fixture.detectChanges();

    const errorDiv: HTMLElement = fixture.debugElement.query(By.css('.error-container')).nativeElement;
    const errorMsgDiv: HTMLElement = fixture.debugElement.query(By.css('.error')).nativeElement;

    expect(errorDiv).toBeTruthy();
    expect(errorMsgDiv.innerText).toBe(errorMsg);
  });

  it('should close on click', () => {
    fixture.detectChanges();

    const closer: HTMLElement = fixture.debugElement.query(By.css('.clickable')).nativeElement;
    closer.click();
    fixture.detectChanges();

    const error = fixture.debugElement.query(By.directive(ErrorMessageComponent)).componentInstance;
    expect(error.errorMsg).toBeFalsy();

    const errorDiv = fixture.debugElement.query(By.css('.error-container'));
    expect(errorDiv).toBeFalsy();
  });
});