import { ComponentFactoryResolver, Directive, Input, ViewContainerRef, Type, OnChanges } from '@angular/core';

@Directive({
  selector: '[nda-component-host]'
})
export class ComponentHostDirective implements OnChanges {

  @Input('nda-component-host') component: Type<any>;
  @Input('config') configObj: object;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnChanges() {
    this.loadComponent();
  }

  loadComponent() {
    if (this.component) {
      this.viewContainerRef.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
      const component = this.viewContainerRef.createComponent(componentFactory);
      if (this.configObj) {
        Object.keys(this.configObj).forEach((key: string) => {
          component.instance[key] = this.configObj[key];
        });
      }
    }
  }
}
