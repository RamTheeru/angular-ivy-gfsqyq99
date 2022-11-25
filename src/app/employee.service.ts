import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './emp';
import { Observable, throwError } from 'rxjs';
import * as R from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private url: string =
    //  'https://github.com/RamTheeru/angular-ivy-gfsqyq99/blob/main/src/app/assets/emp.json';
    'https://raw.githubusercontent.com/RamTheeru/angular-ivy-gfsqyq99/main/src/app/assets/emp.json';
  //o.next(json)
  //'/assets/emp.json';
  getemployees(): Observable<any[]> {
    return this.http
      .get<any[]>(this.url)
      .pipe(retry(1), catchError(this.myerrorHnadler));
  }
  myerrorHnadler(i: any): Observable<any[]> {
    return throwError(() => {
      return `Error Code: ${i.status}\nMessage: ${i.message}`;
    });
  }
  getemps(): Observable<any> {
    let arr = [
      { id: 1, name: 'Ram', age: 30 },
      { id: 2, name: 'Raj', age: 32 },
      { id: 3, name: 'Sai', age: 25 },
      { id: 4, name: 'Eric', age: 27 },
    ];
    let ob = new Observable((o) => {
      o.next(arr);
    });
    return ob;
  }
}
