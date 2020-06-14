import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";
import { ConfigurationService } from "../../services/lookup/config/configuration.service";
import { MockConfigService } from '../../test/test.fixture';

import { SpinnerComponent } from './spinner.component';
import { SpinnerConfig, SpinnerConfigurations, SpinnerType } from "./spinner-type.enum";

@Component({
  template: `<nda-spinner [type]="spinnerType" [show]="show"></nda-spinner>`
})
class TestHostComponent {
  spinnerType: SpinnerType;
  show: boolean;
}

describe('Component: Spinner', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let config: SpinnerConfig;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent, TestHostComponent, NgxSpinnerComponent ],
      providers: [
        NgxSpinnerService,
        { provide: ConfigurationService, useValue: new MockConfigService() }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;

    component.spinnerType = SpinnerType.LARGE;
    config = SpinnerConfigurations[SpinnerType.LARGE];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set container class based on configuration', () => {
    const div: HTMLElement = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(div.classList).toContain(config.containerClass);
  });
  
  it('should set spinner attributes based on configuration', () => {
    const baseSpinner = fixture.debugElement.query(By.directive(NgxSpinnerComponent)).componentInstance;

    expect(baseSpinner.size).toContain(config.spinnerSize);
  });
  
  it('should show & hide the spinner', () => {
    const overlay = fixture.debugElement.query(By.css('.black-overlay'));
    expect(overlay).toBeFalsy();

    component.show = true;
    fixture.detectChanges();

    const overlayEl = fixture.debugElement.query(By.css('.black-overlay')).nativeElement;
    expect(overlayEl).toBeTruthy();

    component.show = false;
    fixture.detectChanges();

    const overlayPostHide = fixture.debugElement.query(By.css('.black-overlay'));
    expect(overlayPostHide).toBeFalsy();
  });
});
