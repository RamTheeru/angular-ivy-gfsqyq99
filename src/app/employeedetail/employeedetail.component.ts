import { Component, OnInit, Input } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css'],
})
export class EmployeedetailComponent implements OnInit {
  @Input('ep') emp: Emp;
  constructor() {}

  ngOnInit() {}
}
