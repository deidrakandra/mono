import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EllipsisPipe } from '@nda/angular';

import { EllipsisWrapperComponent } from './ellipsis-wrapper.component';

describe('EllipsisWrapperComponent', () => {
  let component: EllipsisWrapperComponent;
  let fixture: ComponentFixture<EllipsisWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllipsisWrapperComponent, EllipsisPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
