import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { PropertyUtil } from '../../../../util/util';
import { fadeFastAnimation } from '../../../../animations/fadeAnimation';

import { Date, Day, Month, Selectable, Year } from './date-helper.model';

import * as m from 'moment';
const moment = m;

@Component({
  selector: 'nda-date-helper',
  templateUrl: './date-helper.component.html',
  styleUrls: ['./date-helper.component.scss'],
  animations: [ fadeFastAnimation ]
})
export class DateHelperComponent implements AfterViewInit {

  @ViewChild('container', { static: false }) container: ElementRef;

  @ViewChild('dayTemplate', { static: false }) dayTemplate: TemplateRef<any>;
  @ViewChild('monthTemplate', { static: false }) monthTemplate: TemplateRef<any>;
  @ViewChild('yearTemplate', { static: false }) yearTemplate: TemplateRef<any>;

  @ViewChild('dayHeaderTemplate', { static: false }) dayHeaderTemplate: TemplateRef<any>;
  @ViewChild('monthHeaderTemplate', { static: false }) monthHeaderTemplate: TemplateRef<any>;
  @ViewChild('yearHeaderTemplate', { static: false }) yearHeaderTemplate: TemplateRef<any>;

  @Output() selectedDate = new EventEmitter<Date>();
  @Input() format: string;

  displayConfig: string[];
  display: boolean;
  month: number;
  day: number;
  year: number;
  config;

  days: Day[] = [];
  months: Month[] = [];
  years: Year[] = [];

  readonly monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  readonly init = {
    selected: false,
    disabled: false
  };

  constructor() {
    const beginYear = moment().year() - 10;
    this.days = Array.from({ length: 31 }, (v, i) => {
      return {
        ...this.init,
        value: ++i
      }
    });
    this.months = this.monthNames.map((name: string, i: number) => {
      return {
        selected: false,
        month: name,
        value: i
      }
    });
    this.years = Array.from({ length: 48 }, (v, i) => {
      return {
        ...this.init,
        value: (beginYear + i)
      }
    });
  }

  ngAfterViewInit(): void {
    this.config = {
      D: {
        template: this.dayTemplate,
        label: this.dayHeaderTemplate
      },
      M: {
        template: this.monthTemplate,
        label: this.monthHeaderTemplate
      },
      Y: {
        template: this.yearTemplate,
        label: this.yearHeaderTemplate
      }
    };
    this.setupDisplay();
  }

  get columnOneHeader(): TemplateRef<any> {
    return this._getFromConfig(0, 'label');
  }

  get columnOneTemplate(): TemplateRef<any> {
    return this._getFromConfig(0, 'template');
  }

  get columnTwoHeader(): TemplateRef<any> {
    return this._getFromConfig(1, 'label');
  }

  get columnTwoTemplate(): TemplateRef<any> {
    return this._getFromConfig(1, 'template');
  }

  get columnThreeHeader(): TemplateRef<any> {
    return this._getFromConfig(2, 'label');
  }

  get columnThreeTemplate(): TemplateRef<any> {
    return this._getFromConfig(2, 'template');
  }

  _getFromConfig(index: number, param: string) {
    return this.config[this.displayConfig[index]][param];
  }

  setupDisplay() {
    const parsed = this.format.split('/');
    this.displayConfig = parsed.map((s: string) => s.charAt(0));
  }

  toggle() {
    if (this.display) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.display = true;
    window.setTimeout(() => { this.repositionView() }, 10);
  }

  @HostListener('document:keyup.esc')
  close() {
    this.display = false;
  }

  private repositionView() {
    const rect = this.container.nativeElement.getBoundingClientRect();
    const newBottom = rect.bottom + 10;
    const offscreen = newBottom - window.innerHeight;

    if (offscreen > 0) {
      const maxTop = window.scrollY + rect.top - 60;
      const newTop = window.scrollY + offscreen;
      const scrollAmt = newTop > maxTop ? maxTop : newTop;
      window.scrollTo({
        left: 0,
        top: scrollAmt,
        behavior: 'smooth'
      })
    }
  }

  updateFromInput(timestamp: number) {
    if (isNaN(timestamp)) {
      this.clearAll();
    } else {
      const m = moment(timestamp);
      this.selectMonth(this.getByValue(m.get('month'), this.months));
      this.selectDay(this.getByValue(m.get('date'), this.days));
      this.selectYear(this.getByValue(m.get('year'), this.years));
    }
  }

  canSelect(): boolean {
    return PropertyUtil.notEmpty(this.month) && PropertyUtil.notEmpty(this.day) && PropertyUtil.notEmpty(this.year);
  }

  onSelect() {
    this.selectedDate.emit({
      month: this.month,
      date: this.day,
      year: this.year
    });
  }

  selectMonth(month: Month | Selectable) {
    if (month) {
      this.month = month.value;
      this.setSelected(month, this.months);
      this.disableDays(month.value);
    }
  }

  selectDay(day: Selectable) {
    if (day) {
      this.day = day.value;
      this.setSelected(day, this.days);
    }
  }

  selectYear(year: Selectable) {
    if (year) {
      this.year = year.value;
      this.setSelected(year, this.years);
      this.disableDays(this.month);
    }
  }

  clearAll() {
    this.deselect(this.days);
    this.deselect(this.months);
    this.deselect(this.years);
    this.day = this.month = this.year = null;
  }

  private setSelected(selected: Selectable, arr: Selectable[]) {
    this.deselect(arr);
    selected.selected = true;
  }

  private deselect(arr: Selectable[]) {
    arr.forEach((s: Selectable) => s.selected = false);
  }

  private disableDays(month: number) {
    const daysInMonth: number = this.getDaysInMonth(month);
    this.days.forEach((d: Day) => {
      d.disabled = +d.value > daysInMonth;
      if (d.selected && d.disabled) {
        d.selected = false;
        this.day = null;
      }
    });
  }

  private getDaysInMonth(month: number): number {
    return  PropertyUtil.empty(this.year)
      ? moment().set({'month': month}).daysInMonth()
      : moment().set({'month': month, 'year': +this.year}).daysInMonth();
  }

  private getByValue(value: number, arr: Selectable[]) {
    return arr.find((s: Selectable) => s.value === value);
  }
}
