import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingComponent } from './spacing.component';
import { FileService } from '../../../core/services/file.service';

describe('SpacingComponent', () => {
  let component: SpacingComponent;
  let fixture: ComponentFixture<SpacingComponent>;
  let fileService: FileService;

  const mockFileService = {
    getSpacing: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacingComponent ],
      providers: [
        { provide: FileService, useValue: mockFileService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacingComponent);
    component = fixture.componentInstance;
    fileService = fixture.debugElement.injector.get(FileService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
