import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Detail } from './detail.model';

@Component({
  selector: 'sg-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  config: Detail;
  type: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.config = data.config;
      this.type = data.type;
    });
  }

  get component(): Type<any> {
    return this.config.component || null;
  }

}
