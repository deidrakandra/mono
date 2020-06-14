import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MockRouter } from '@nda/angular';

import { ApisComponent } from './apis.component';

describe('ApisComponent', () => {
  let component: ApisComponent;
  let fixture: ComponentFixture<ApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: new MockRouter() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
