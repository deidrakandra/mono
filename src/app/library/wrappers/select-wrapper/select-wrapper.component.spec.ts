import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent, ValidationMessageService, ConfigurationService } from '@nda/angular';

import { SelectWrapperComponent } from './select-wrapper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MockConfigService,
  MockValidationService
} from '../../../../../projects/nda-angular/src/lib/test/test.fixture';

describe('SelectWrapperComponent', () => {
  let component: SelectWrapperComponent;
  let fixture: ComponentFixture<SelectWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWrapperComponent, SelectComponent ],
      imports: [ ReactiveFormsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() },
        { provide: ConfigurationService, useValue: new MockConfigService() }
      ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
