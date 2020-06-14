import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { CollapsibleComponent } from './collapsible.component';

@Component({
  template: `<nda-collapsible [heading]="heading"><div>{{ content }}</div></nda-collapsible>`
})
class TestHostComponent {
  heading: string;
  content: string;
}

describe('Component: Collapsible', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let header: HTMLElement;

  const headingText = 'Click Me';
  const content = 'Surprise';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleComponent, TestHostComponent ],
      imports: [NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.heading = headingText;
    component.content = content;
    fixture.detectChanges();
    header = fixture.debugElement.query(By.css('.collapsible-title')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('content', () => {
    it('should display header', () => {
      expect(header.innerText).toContain(headingText);
    });

    it('should not display content by default', () => {
      const contentEl: HTMLElement = fixture.debugElement.query(By.css('.collapsible-content')).nativeElement;
      expect(contentEl.classList).toContain('collapsible');
      expect(contentEl.style['display']).toBeFalsy();
      expect(contentEl.style['height']).toContain('0px');
      expect(contentEl.style['opacity']).toContain('0');
    });
  });

  describe('state', () => {
    it('should display content when clicked', () => {
      header.click();
      fixture.detectChanges();

      const contentEl: HTMLElement = fixture.debugElement.query(By.css('.collapsible-content')).nativeElement;
      expect(contentEl.innerText).toContain(content);
    });
  });
});
