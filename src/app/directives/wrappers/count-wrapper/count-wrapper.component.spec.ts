import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountWrapperComponent } from './count-wrapper.component';
import { CountPipe } from '@nda/angular';

describe('CountWrapperComponent', () => {
  let component: CountWrapperComponent;
  let fixture: ComponentFixture<CountWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountWrapperComponent, CountPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
