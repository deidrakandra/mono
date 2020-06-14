import { Option } from "./option.model";

export class OptionsUtil {

  static toOptions(result: any[], valueKey: string, labelKey: string): Option[] {
    return result.map(a => {
      return {
        value: a[valueKey] || a[labelKey] || a.id,
        label: a[labelKey] || a.label
      }
    });
  }

  static sortNumeric(options: Option[]): Option[] {
    return options.sort((a: Option, b: Option) => +a.value - +b.value);
  }

  static toSortedOptions(result: any[], valueKey: string, labelKey: string): Option[] {
    return this.sortNumeric(this.toOptions(result, valueKey, labelKey));
  }
}