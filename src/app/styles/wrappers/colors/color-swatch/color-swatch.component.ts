import { Component, Input } from '@angular/core';
import { ColorSwatch } from "./color-swatch.model";

@Component({
  selector: 'sg-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.scss']
})
export class ColorSwatchComponent {

  @Input() swatch: ColorSwatch;

  get backgroundColor(): string {
    return this.swatch.display ? this.swatch.display : this.swatch.color;
  }

  get label(): string {
    return `${this.swatch.name}: ${this.swatch.color}`;
  }
}
