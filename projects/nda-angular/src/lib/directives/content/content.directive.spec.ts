import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from "@angular/core";
import { By } from '@angular/platform-browser';

import { ContentDirective } from './content.directive';
import { ContentService } from "../../services/lookup/content/content.service";

@Component({
  template: `<div content="test.one"></div>`
})
class TestHostComponent { }

describe('Directive: Content', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  let contentServiceSpy = jasmine.createSpyObj(['lookup']);
  let content = 'Words from cms';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, ContentDirective],
      providers: [
        { provide: ContentService, useValue: contentServiceSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    contentServiceSpy.lookup.and.returnValue(content);

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(ContentDirective));

    expect(directive).toBeTruthy();
  });

  it('should display content based on key', () => {
    const div: HTMLElement = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(div.innerText).toContain(content);
    expect(contentServiceSpy.lookup).toHaveBeenCalled();
  });

});
