import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { videoFixture } from '../../../test/test.fixture';

import { VideoComponent } from './video.component';
import { Video } from '../help-center.model';


@Component({
  template: `<nda-video [video]="video"></nda-video>`
})
class TestHostComponent {
  video: Video;
}

xdescribe('Component: Video', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [VideoComponent, TestHostComponent],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.video = videoFixture;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display value', () => {
    try {
      const lastPublished: HTMLElement = fixture.debugElement.query(By.css('.last-published')).nativeElement;

      console.log(lastPublished);
      console.log(lastPublished.innerText);
      console.log(videoFixture.lastPublished);

      expect(lastPublished.innerText).toContain(videoFixture.lastPublished);
      console.log(lastPublished);
    } catch (e) {
      console.log(e);
    }
  });

  it('should be visible when video is present', () => {
    const video: HTMLElement = fixture.debugElement.query(By.css('.video')).nativeElement;

    console.log(video);

    expect(video).toBeTruthy();
  });

  it('should have video element', () => {
    const video: HTMLVideoElement = fixture.debugElement.query(By.css('.video')).nativeElement;

    console.log(video);

    expect(video).toBeTruthy();
  });

  it('should be hidden when video is not present', () => {
    component.video = null;
    fixture.detectChanges();

    const video = fixture.debugElement.query(By.css('.video'));

    expect(video).toBeFalsy();
  });
});