import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-services/employee.services';
import { IEmployee } from '../../models/employee';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<IEmployee[]>;
  loading = true;
  registerEmployeeRoute = '/employee/register';

  constructor(
    private employeeService: EmployeeService) {
    console.log('list constr');
  }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }

}
