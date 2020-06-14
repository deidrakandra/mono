import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../../services/lookup/config/configuration.service';
import { MockConfigService } from '../../../test/test.fixture';

import { HelpButtonComponent } from './help-button.component';

@Component({
  template: `<nda-help-button (openHelp)="openHelp()" [displayHelp]="displayHelp"></nda-help-button>`
})
class TestHostComponent {
  displayHelp: boolean;
  openHelp = jasmine.createSpy('openHelpSpy');
}

describe('Component: HelpButton', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let button: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpButtonComponent, TestHostComponent],
        imports: [NoopAnimationsModule],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible by default', () => {
    expect(button.offsetTop).toBeGreaterThan(0);
  });

  it('should not be visible when clicked', () => {
    component.displayHelp = true;
    fixture.detectChanges();

    expect(button.offsetTop).toBeLessThan(0);
  });

  it('should emit event when clicked', () => {
    button.click();
    expect(component.openHelp).toHaveBeenCalled();
  }); 

});