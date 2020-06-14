import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

export class ObservableUtil {

  static getValue(obs$: Observable<any>): any {
    let value = null;
    obs$.pipe(
      take(1)
    ).subscribe((val: any) => value = val);
    return value;
  }

  static getListLength$(obs$: Observable<any[]>): Observable<number> {
    return obs$.pipe(
      take(1),
      map((array: any[]) => array.length)
    );
  }

}