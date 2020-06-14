import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleComponent } from '@nda/angular';

import { CollapsibleWrapperComponent } from './collapsible-wrapper.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CollapsibleWrapperComponent', () => {
  let component: CollapsibleWrapperComponent;
  let fixture: ComponentFixture<CollapsibleWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleWrapperComponent, CollapsibleComponent ],
        imports: [ NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
