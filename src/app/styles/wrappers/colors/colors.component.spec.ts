import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { of } from "rxjs/internal/observable/of";

import { FileService } from "../../../core/services/file.service";
import { ColorsComponent } from './colors.component';
import { ColorSwatchComponent } from "./color-swatch/color-swatch.component";


describe('ColorComponent', () => {
  let component: ColorsComponent;
  let fixture: ComponentFixture<ColorsComponent>;
  let fileService: FileService;

  const mockFileService = {
    getColors: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsComponent, ColorSwatchComponent ],
      providers: [
        { provide: FileService, useValue: mockFileService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsComponent);
    component = fixture.componentInstance;
    fileService = fixture.debugElement.injector.get(FileService);
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
  
  it('should call the service', () => {
    spyOn(fileService, 'getColors').and.returnValue(of("$color-white: #fff; $color-black: #000"));
    fixture.detectChanges();

    expect(fileService.getColors).toHaveBeenCalled();
  });

  it('should have two swatches', () => {
    spyOn(fileService, 'getColors').and.returnValue(of("$color-white: #fff; $color-black: #000"));
    fixture.detectChanges();

    const swatches = fixture.debugElement.queryAll(By.css('.color-swatch'));

    expect(swatches.length).toBe(2);
  });

  it('should substitute color names', () => {
    spyOn(fileService, 'getColors').and.returnValue(of("$color-white: #fff; $color-black: #000; $color-font: $color-black"));

    fixture.detectChanges();
    const swatches = fixture.debugElement.queryAll(By.css('.color-swatch'));
    const code = fixture.debugElement.queryAll(By.css('code'));
    const testSwatch: HTMLElement = swatches[2].nativeElement;
    const testCode: HTMLElement = code[2].nativeElement;

    expect(swatches.length).toBe(3);
    expect(code.length).toBe(3);
    expect(testSwatch.style.backgroundColor).toBe('rgb(0, 0, 0)');
    expect(testCode.innerText).toBe('$color-font: $color-black');
  });
});
