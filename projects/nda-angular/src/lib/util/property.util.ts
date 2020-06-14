export class PropertyUtil {

  static notEmpty(attr: string | number): boolean {
    return attr != null && attr !== '';
  }

  static empty(attr: string | number): boolean {
    return attr == null || attr === '';
  }

}