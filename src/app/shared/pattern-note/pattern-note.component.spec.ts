import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { PatternNoteComponent } from './pattern-note.component';
import { PatternNote } from './pattern-note.model';

@Component({
  template: `<sg-pattern-note [note]="note"></sg-pattern-note>`
})
class TestHostComponent {
  note: PatternNote;
}

describe('PatternNoteComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternNoteComponent, TestHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.note = {
      pattern: [],
      notes: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
