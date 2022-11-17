import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() {}

  getemployees() {
    return [
      { id: 1, name: 'Ram', age: 30 },
      { id: 2, name: 'Raj', age: 32 },
      { id: 3, name: 'Sai', age: 25 },
      { id: 4, name: 'Eric', age: 27 },
    ];
  }
}
