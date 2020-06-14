import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollWrapperComponent } from './scroll-wrapper.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollComponent } from '@nda/angular';

describe('ScrollWrapperComponent', () => {
  let component: ScrollWrapperComponent;
  let fixture: ComponentFixture<ScrollWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollWrapperComponent, ScrollComponent ],
        imports: [ NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
