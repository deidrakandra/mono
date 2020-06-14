import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

import { ColorSwatchComponent } from './color-swatch.component';
import { ColorSwatch } from "./color-swatch.model";

@Component({
  template: `<sg-color-swatch [swatch]="swatch"></sg-color-swatch>`
})
class TestHostComponent {
  swatch: ColorSwatch;
}

describe('ColorSwatchComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, ColorSwatchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.swatch = {
      color: '#fff',
      name: 'white'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct color', () => {
    const swatch: HTMLElement = fixture.debugElement.query(By.css('.color-swatch')).nativeElement;

    expect(swatch.style.backgroundColor).toBe("rgb(255, 255, 255)");
  });

  it('should display correct label', () => {
    const label: HTMLElement = fixture.debugElement.query(By.css('code')).nativeElement;

    expect(label.innerText).toBe(`${component.swatch.name}: ${component.swatch.color}`)
  });
});
