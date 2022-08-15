import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HotAndColdObservablesService {
  public coldObservable$: Observable<number>;
  private timeStep: number;
  constructor() {
    this.coldObservable$ = of(null).pipe(map(() => Math.random()));
    this.timeStep = Date.now();
  }

  public hotObservable(): Observable<number> {
    return new Observable((subscriber) => {
      subscriber.next(this.timeStep);
    });
  }
}
