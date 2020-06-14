import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { UsageNotesComponent } from './usage-notes.component';
import { UsageNote } from './usage-note.model';


@Component({
  template: `<sg-usage-notes [note]="notes"></sg-usage-notes>`
})
class TestHostComponent {
  notes: UsageNote = {
    inputs: [],
    outputs: [],
    example: '',
    notes: []
  }
}


describe('Component: UsageNotes', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageNotesComponent, TestHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
