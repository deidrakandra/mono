import { Component, Input } from '@angular/core';
import { Video } from "../help-center.model";

@Component({
  selector: 'nda-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  @Input() video: Video;

  get webm(): string {
    return this.video.mediaWebM;
  }

  get mp4(): string {
    return this.video.mediaMp4;
  }

  get lastPublished(): string {
    return this.video.lastPublished;
  }

}
