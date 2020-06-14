export class ObjectUtil {

  static getOrEmpty(obj: object, key: string): string {
    return obj ? obj[ key ] : '';
  };

  static getOrDefault(obj: object, key: string, alt: string): string {
    return obj ? obj[ key ] : alt;
  };

  static flatten(obj: object): any {
    const flattened = {};
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, ObjectUtil.flatten(obj[key]))
      } else {
        flattened[key] = obj[key]
      }
    });
    return flattened;
  }
}
