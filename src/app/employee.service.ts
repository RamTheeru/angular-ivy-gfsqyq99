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
}
