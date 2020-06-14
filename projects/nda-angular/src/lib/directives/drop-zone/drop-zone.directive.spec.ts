import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DropZoneDirective } from './drop-zone.directive';

@Component({
  template: `<div dropZone (dropped)="dropped($event)"></div>`
})
class TestHostComponent {
  dropped = jasmine.createSpy('dropSpy');
}

describe('Directive: DropZone', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let directive: DropZoneDirective;
  let dropZoneDebug: DebugElement;
  let dropZone: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DropZoneDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    directive = fixture.debugElement.query(By.directive(DropZoneDirective)).injector.get(DropZoneDirective);
    dropZoneDebug = fixture.debugElement.query(By.css('div'));
    dropZone = dropZoneDebug.nativeElement;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  describe('class changes', () => {
    it('should update class on dragenter', () => {
      expect(dropZone.classList).not.toContain('dragHover');

      dropZone.dispatchEvent(new Event('dragenter'));
      fixture.detectChanges();

      expect(dropZone.classList).toContain('dragHover');
    });

    it('should hold class on dragover', () => {
      expect(dropZone.classList).not.toContain('dragHover');

      dropZone.dispatchEvent(new Event('dragenter'));
      fixture.detectChanges();

      expect(dropZone.classList).toContain('dragHover');

      dropZone.dispatchEvent(new Event('dragover'));
      fixture.detectChanges();

      expect(dropZone.classList).toContain('dragHover');
    });

    it('should remove class on dragleave', () => {
      expect(dropZone.classList).not.toContain('dragHover');

      dropZone.dispatchEvent(new Event('dragenter'));
      fixture.detectChanges();

      expect(dropZone.classList).toContain('dragHover');

      dropZone.dispatchEvent(new Event('dragleave'));
      fixture.detectChanges();

      expect(dropZone.classList).not.toContain('dragHover');
    });
  });

  describe('events', () => {
    it('should not hover by default', () => {
      expect(directive.hovering).toBeFalsy();
    });

    it('should indicate hovering on dragenter', () => {
      dropZone.dispatchEvent(new Event('dragenter'));
      fixture.detectChanges();

      expect(directive.hovering).toBeTruthy();
    });

    it('should remove hovering on dragleave', () => {
      dropZone.dispatchEvent(new Event('dragenter'));
      fixture.detectChanges();

      expect(directive.hovering).toBeTruthy();

      dropZone.dispatchEvent(new Event('dragleave'));
      fixture.detectChanges();

      expect(directive.hovering).toBeFalsy();
    });
    
    it('should emit drop event', () => {
      const dataTransfer = new DataTransfer();
      const testFile = new File(['file'], 'fileOne');
      dataTransfer.items.add(testFile);

      dropZoneDebug.triggerEventHandler('drop', {
        dataTransfer: dataTransfer,
        stopPropagation: () => {},
        preventDefault: () => {}
      });

      expect(component.dropped).toHaveBeenCalledTimes(1);
      expect(component.dropped).toHaveBeenCalledWith({
        file: testFile,
        path: ''
      });
    });

    it('should emit drop event for each file', () => {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(new File(['file'], 'fileOne'));
      dataTransfer.items.add(new File(['file'], 'fileTwo'));
      dataTransfer.items.add(new File(['file'], 'fileThree'));

      dropZoneDebug.triggerEventHandler('drop', {
        dataTransfer: dataTransfer,
        stopPropagation: () => {},
        preventDefault: () => {}
      });

      expect(component.dropped).toHaveBeenCalledTimes(3);
    });

  });
});