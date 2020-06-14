import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { NgxSpinnerService } from "ngx-spinner";
import { ConfigurationService } from "../../services/lookup/config/configuration.service";

import { LoadingComponent } from "./loading.component";
import { SpinnerComponent } from "../spinner/spinner.component";
import { MockConfigService } from '../../test/test.fixture';


describe('Component: Loading', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [LoadingComponent, SpinnerComponent],
        providers: [
          NgxSpinnerService,
          { provide: ConfigurationService, useValue: new MockConfigService() }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default message', () => {
    expect(component.key).toBe('loading.default');
  });

  it('should display content message', () => {
    const key = 'loading.overwrite';

    component.contentKey = key;
    fixture.detectChanges();

    expect(component.key).toBe(key);
  });
});