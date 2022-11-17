import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './emp';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  url: string =
    // 'https://github.com/RamTheeru/angular-ivy-gfsqyq99/blob/main/src/app/assets/emp.json';
    './assets/emp.json';
  getemployees(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.url);
  }
}
