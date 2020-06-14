import { HttpClient } from "@angular/common/http";
import { forkJoin, throwError } from 'rxjs';

export abstract class LookupService {

  private dictionary: Object;

  protected constructor (
    private http: HttpClient,
    private urls: string[]
  ) {
    this.dictionary = {};
  }

  load(): Promise<any> {
    return this.doGet()
      .then(results => {
        const keys = Array.isArray(results) ?  Object.assign({}, ...results) : results;
        this.dictionary = keys;
        this.onLoadComplete(keys);
      },
    error => throwError(error));
  }

  protected doGet(): Promise<any> {
    const url$ = this.urls.map((url: string) => this.http.get(url));
    return forkJoin(url$).toPromise();
  }

  lookup(key: string): string {
    return this.dictionary[key] || key;
  }

  lookupNumber(key: string): number | null {
    return +this.dictionary[key] || null;
  }

  lookupObject(key: string): any {
    return this.dictionary[key] || key;
  }

  lookupFlag(key: string): boolean {
    const value: string = this.dictionary[key];
    return value != null && (value.toLowerCase() === 'true' || +value === 1);
  }

  lookupOrNull(key: string): string | null {
    return this.dictionary[key];
  }

  onLoadComplete(data: any) { }
}
