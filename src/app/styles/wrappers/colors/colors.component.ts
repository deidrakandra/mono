import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";

import { FileService } from "../../../core/services/file.service";
import { ColorSwatch } from "./color-swatch/color-swatch.model";

@Component({
  selector: 'sg-colors',
  templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit {

  parsedSwatches: ColorSwatch[];
  colorDict: Object;

  constructor(
    private file: FileService
  ) { }

  ngOnInit() {
    this.file.getColors().pipe(
      map((file: string) => file.split(';')),
      map((entries: string[]) => entries.map((entry: string) => entry.split(':'))),
      map((entries: string[][]) => entries.filter(entry => entry.length > 1)),
      map((entries: string[][]) => entries.map((entry: string[]) => this.getColorSwatch(entry)))
    ).subscribe((swatches: ColorSwatch[]) => this.parsedSwatches = swatches);
  }

  getColorSwatch(entry: string[]): ColorSwatch {
    const swatch: ColorSwatch = {
      name: entry[0].trim(),
      color: entry[1].trim()
    };
    if (swatch.color.indexOf('$') > -1) {
      swatch['display'] = this.colorDict[swatch.color];
    } else {
      this.colorDict = { ...this.colorDict, [swatch.name]: swatch.color };
    }
    return swatch;
  }
}
