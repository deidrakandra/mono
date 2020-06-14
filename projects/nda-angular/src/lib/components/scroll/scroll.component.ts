import { Component, HostListener, Input, OnInit } from '@angular/core';
import { bottomUpAnimation } from '../../animations/slideAnimation';

@Component({
  selector: 'nda-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  animations: [ bottomUpAnimation ]
})
export class ScrollComponent implements OnInit {

  @Input() fixed: boolean;
  @Input() scrollBottom: boolean;

  top: boolean;
  bottom: boolean;

  ngOnInit() {
    this.checkPosition();
  }

  get edge(): boolean {
    return this.top || this.bottom;
  }

  @HostListener('window:scroll')
  checkPosition(): void {
    if (this.fixed) {
      this.top = !this.scrollBottom && (window.scrollY < (window.innerHeight) / 2);
      this.bottom = this.scrollBottom && (window.scrollY > (document.body.scrollHeight - window.innerHeight));
    }
  }

  scroll(): void {
    const scrollPosition = this.scrollBottom ? document.body.scrollHeight : 0;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }
}
