import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../core/services/file.service';
import { filter, flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'sg-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent implements OnInit {

  vars: string[] = [];

  constructor(
    private file: FileService
  ) { }

  ngOnInit() {
    this.file.getSpacing().pipe(
      flatMap((text: string) => text.split(`\n`)),
      filter((line: string) => line.startsWith('$'))
    ).subscribe((line: string) => this.vars.push(line));
  }

  get template(): string {
    return `.{type}-{position}-{size}`;
  }

  get templateValues(): string[] {
    return [
      `type: p | m`,
      `position: top | right | bottom | left`,
      `size: none | xs | sm | md | lg | xl`
    ];
  }
}
