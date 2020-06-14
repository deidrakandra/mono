import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { HelpCenterComponent, MenuComponent, ContentDirective, ConfigurationService, ContentService, ErrorMessageComponent, SpinnerComponent, LoadingComponent, MockContentService, MockConfigService, ComponentHostDirective, MockRouter } from '@nda/angular';

import { SectionComponent } from "../shared/section/section.component";
import { LibraryComponent } from './library.component';

@Component({
  selector: 'nda-signin',
  template: `<p>Mock Sign In</p>`
})
class MockSignInComponent { }

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibraryComponent, LoadingComponent, SpinnerComponent, MockSignInComponent, ErrorMessageComponent,
        HelpCenterComponent, MenuComponent, ContentDirective, SectionComponent, ComponentHostDirective
      ],
      providers: [
        { provide: ConfigurationService, useValue: new MockConfigService() },
        { provide: ContentService, useValue: new MockContentService() },
        { provide: Router, useValue: new MockRouter() },
        NgxSpinnerService,
      ],
      schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
