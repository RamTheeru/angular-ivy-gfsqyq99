import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  emps = [];
  employee: Emp;
  constructor(private eS: EmployeeService) {}

  ngOnInit() {
    this.eS.getemployees().subscribe((i) => (this.emps = i));
  }
  passDetails(e) {
    this.employee = e;
  }
}
