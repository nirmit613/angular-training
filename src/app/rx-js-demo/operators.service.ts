import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  concat,
  concatMap,
  concatWith,
  from,
  interval,
  map,
  merge,
  mergeMap,
  of,
  pipe,
  shareReplay,
  switchMap,
  take,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperatorsService {
  constructor(private http: HttpClient) {}

  ofOperator(): Observable<number> {
    let numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log('Of Operator is called');
    return numbers$;
  }
  ofOperatorwithList(): Observable<any[]> {
    let usersData = [
      {
        id: 1,
        name: 'Nirmit',
        role: 'Intern',
      },
      {
        id: 2,
        name: 'Ninu',
        role: 'Doctor',
      },
    ];
    let users$ = of(usersData);
    return users$;
  }
  fromOperator(): Observable<number> {
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('From operator called');
    let numbers$ = from(numbersArray);
    return numbers$;
  }
  concatwithOperator(): Observable<number> {
    let x$ = of(1, 3, 5, 7, 9);
    let y$ = of(2, 4, 6, 8);
    let concated$ = x$.pipe(concatWith(y$));
    console.log('Concatwith operator is called');

    return concated$;
  }

  mergeOperator(): Observable<number> {
    const sourceOne$ = interval(1000);
    const sourceTwo$ = interval(2000);
    console.log('Merge Operator is called');
    const result$ = merge(sourceOne$, sourceTwo$);
    return result$;
  }
  mapOperator(): Observable<number> {
    let data$ = of(1, 5, 9, 10, 7);
    console.log('Map operator called');
    let mapped$ = data$.pipe(map((x) => x * 5));
    return mapped$;
  }
  concatMap(): Observable<string> {
    const sourceObs$ = of(1, 2, 3, 4, 5);
    const innerObs$ = of('Nirmit', 'Ninu', 'Jay');
    const mappedObs$ = sourceObs$.pipe(
      concatMap((val) => {
        console.log('Source observable Value', val);
        console.log('Start inner observable');
        return innerObs$;
      })
    );
    return mappedObs$;
  }
  concatMapWithAPI(): Observable<any> {
    const breed$ = of('hound', 'mastiff', 'retriever'); // outer/source observable
    const concatMapped$ = breed$.pipe(
      concatMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url); // inner observable
      })
    );
    return concatMapped$;
  }
  mergeMap(): Observable<any> {
    const breed$ = of('hound', 'mastiff', 'retriever'); // outer/source observable
    const mergeMapped$ = breed$.pipe(
      mergeMap((val) => {
        const url = 'https://dog.ceo/api/breed/' + val + '/list';
        return this.http.get<any>(url); // inner observable
      })
    );
    return mergeMapped$;
  }

  switchMap() {
    const breed$ = of('hound', 'mastiff', 'retriever');
    const switchMapped$ = breed$.pipe(
      switchMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url);
      })
    );
    return switchMapped$;
  }

  takeUntil() {
    const source$ = interval(1000);
    return source$;
  }
  forkJoinOp(breed: string): Observable<any> {
    const url = 'https://dog.ceo/api/breed/' + breed + '/list';
    return this.http.get<any>(url);
  }
  shareReplay(): Observable<number> {
    const source$ = interval(2000).pipe(take(3), shareReplay(3)); // 3 is buffer size which means it will cashe the last 3 emmitted values and replay them into new subscribers
    console.log('shareReplay operator is called');
    return source$;
  }
}
