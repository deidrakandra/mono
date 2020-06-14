import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleComponent } from '@nda/angular';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InstallationComponent } from './installation.component';

describe('InstallationComponent', () => {
  let component: InstallationComponent;
  let fixture: ComponentFixture<InstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationComponent, CollapsibleComponent ],
      imports: [ NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
