import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
}
