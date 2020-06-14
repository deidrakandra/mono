import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardWrapperComponent } from './wizard-wrapper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ContentService } from '@nda/angular';
import { MockContentService } from '../../../../../projects/nda-angular/src/lib/test/test.fixture';


describe('Component: WizardWrapper', () => {
  let component: WizardWrapperComponent;
  let fixture: ComponentFixture<WizardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardWrapperComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ContentService, useValue: new MockContentService() },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
