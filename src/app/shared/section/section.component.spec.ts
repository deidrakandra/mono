import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { ComponentHostDirective } from '@nda/angular';

import { SectionComponent } from './section.component';
import { SectionConfig } from '../../styles/docs/styles.config';

@Component({
  template: `<sg-section [config]="config"></sg-section>`
})
class TestHostComponent {
  config: SectionConfig;
}

describe('SectionComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let sectionConfig = {
    id: 'anchor-test',
    title: 'test'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent, TestHostComponent, ComponentHostDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.config = sectionConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set section id', () => {
    const section: HTMLElement = fixture.debugElement.query(By.css('section')).nativeElement;

    expect(section.id).toBe(sectionConfig.id);
  }); 

  it('should set section title', () => {
    const title: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(title.innerText).toBe(sectionConfig.title);
  }); 
});
