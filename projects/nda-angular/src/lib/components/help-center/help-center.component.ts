import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nda-help-center',
  templateUrl: './help-center.component.html',
})
export class HelpCenterComponent implements OnInit {

  displayHelp: boolean = false;
  route: string;

  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => this.setRoute() );
  }

  ngOnInit() {
    this.setRoute();
  }

  setRoute() {
    const pieces = this.router.routerState.snapshot.url.split('/');
    this.route = pieces[pieces.length - 1];
  }

  openHelp() {
    this.displayHelp = true;
  }

  closeHelp() {
    this.displayHelp = false;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.closeHelp();
    }
  }
}
