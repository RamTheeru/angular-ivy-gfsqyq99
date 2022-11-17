import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddcurrencyPipe } from './addcurrency.pipe';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button.component';
import { TestComponent } from './test/test.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { Service1Service } from './service1.service';
import { EmployeeService } from './employee.service';
@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    TestComponent,
    EmployeesComponent,
    EmployeedetailComponent,
    AddcurrencyPipe,
  ],
  providers: [Service1Service, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
