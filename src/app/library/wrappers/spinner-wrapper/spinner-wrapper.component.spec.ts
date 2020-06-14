import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ConfigurationService, MockConfigService, SpinnerComponent } from '@nda/angular';

import { SpinnerWrapperComponent } from './spinner-wrapper.component';

describe('SpinnerWrapperComponent', () => {
  let component: SpinnerWrapperComponent;
  let fixture: ComponentFixture<SpinnerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerWrapperComponent, SpinnerComponent ],
      providers: [
        NgxSpinnerService,
        { provide: ConfigurationService, useValue: new MockConfigService() }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
