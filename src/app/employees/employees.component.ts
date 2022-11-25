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
    // this.eS.getemployees().subscribe((i) => {
    //   console.log('getting response');
    //   if (i instanceof Emp) {
    //     this.emps = i;
    //   } else if (i.length > 0) {
    //     this.emps = i;
    //   } else {
    //     alert(i);
    //   }
    // });
    this.eS.getemps().subscribe((i) => {
      console.log('getting response');
      this.emps = i;
    });
    console.log('finished');
    console.log('finished2');
  }
  passDetails(e) {
    this.employee = e;
  }
}
