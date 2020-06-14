import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ErrorMessageComponent, ErrorMessageService, ConfigurationService, MockConfigService } from '@nda/angular';

import { ErrorWrapperComponent } from './error-wrapper.component';

describe('ErrorWrapperComponent', () => {
  let component: ErrorWrapperComponent;
  let fixture: ComponentFixture<ErrorWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorWrapperComponent, ErrorMessageComponent ],
      providers: [
        ErrorMessageService,
        { provide: ConfigurationService, useValue: new MockConfigService() },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
