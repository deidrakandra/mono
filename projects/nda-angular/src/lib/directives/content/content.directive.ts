import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ContentService } from "../../services/lookup/content/content.service";

@Directive({
  selector: '[content]'
})
export class ContentDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private content: ContentService
  ) { }

  @Input('content') key: string;

  ngOnInit(): any {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content.lookup(this.key));
  }

}
