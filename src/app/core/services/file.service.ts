import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  getColors(): Observable<string> {
    return this.getFile('assets/model/_colors.scss');
  }

  getVars(): Observable<string> {
    return this.getFile('assets/model/_vars.scss');
  }

  getSpacing(): Observable<string> {
    return this.getFile('assets/model/_spacing.scss');
  }

  private getFile(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
