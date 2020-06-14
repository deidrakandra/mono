import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Api } from './api-doc.model';

@Component({
  selector: 'sg-api-docs',
  templateUrl: './api-docs.component.html',
  styleUrls: ['./api-docs.component.scss']
})
export class ApiDocsComponent implements OnInit {

  api: Api;
  type: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.api = data.config;
      this.type = data.type;
    });
  }

}
