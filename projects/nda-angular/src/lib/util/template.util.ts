export class TemplateUtil {

  static resolve(template: string, params: any) {
    return template.replace(/\${(.*?)}/g, (x,g)=> params[g]);
  }
}