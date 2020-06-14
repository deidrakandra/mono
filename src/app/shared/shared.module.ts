import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

import { NdaModule } from '@nda/angular';

import { SectionComponent } from "./section/section.component";
import { UsageNotesComponent } from './usage-notes/usage-notes.component';
import { DetailComponent } from './detail/detail.component';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { ParamListComponent } from './param-list/param-list.component';
import { ParamComponent } from './param-list/param/param.component';
import { PatternNoteComponent } from './pattern-note/pattern-note.component';
import { ControlWrapperComponent } from './control-wrapper/control-wrapper.component';


export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NdaModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  declarations: [
    SectionComponent,
    UsageNotesComponent,
    ApiDocsComponent,
    DetailComponent,
    ParamComponent,
    ParamListComponent,
    PatternNoteComponent,
    ControlWrapperComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NdaModule,
    SectionComponent,
    UsageNotesComponent,
    DetailComponent,
    ApiDocsComponent,
    ControlWrapperComponent
  ]
})
export class SharedModule { }
