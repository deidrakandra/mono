import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollComponent } from '@nda/angular';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FooterWrapperComponent } from './footer-wrapper.component';

describe('FooterWrapperComponent', () => {
  let component: FooterWrapperComponent;
  let fixture: ComponentFixture<FooterWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterWrapperComponent, ScrollComponent ],
      imports: [ NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
