import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ApiDocsComponent } from './api-docs.component';


describe('ApiDocsComponent', () => {
  let component: ApiDocsComponent;
  let fixture: ComponentFixture<ApiDocsComponent>;

  let config = {
    data: of({ config: {} })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocsComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
        providers: [
          { provide: ActivatedRoute, useValue: config}
        ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
