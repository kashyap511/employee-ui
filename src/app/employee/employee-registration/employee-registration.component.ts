import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IEmployee, EmployeeObject } from '../../models/employee';
import { EmployeeService } from '../employee-services/employee.services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit, OnDestroy {

  employeeForm: FormGroup;
  employee: IEmployee = new EmployeeObject();
  registerEmployeeSubscription: Subscription;
  genderValues: any[] = [
    {
      value: 'Male',
      name: 'Male'
    },
    {
      value: 'Female',
      name: 'Female'
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router) {
      console.log('Reg constr');
     }

  ngOnInit() {
    this.employee.gender = 'select';
    this.employeeForm = this.formBuilder.group(
      {
        'firstName': new FormControl(this.employee.firstName, Validators.required),
        'lastName': new FormControl(this.employee.lastName, Validators.required),
        'gender': new FormControl('select', Validators.required),
        'dateOfBirth': new FormControl(this.employee.dateOfBirth, Validators.required),
        'department': new FormControl(this.employee.department, Validators.required)
      }
    );
  }

  onSubmit() {
    console.log(this.employeeForm.controls);
    if (this.registerEmployeeSubscription) {
      this.registerEmployeeSubscription.unsubscribe();
    }
    this.registerEmployeeSubscription = this.employeeService.registerEmployee(this.employee)
      .subscribe(
        () => {
          this.router.navigateByUrl('employee/list');
        },
        () => {
          console.log('Error while registering the employee! Please try after some time');
        }
      );
  }

  ngOnDestroy() {
    if (this.registerEmployeeSubscription) {
      this.registerEmployeeSubscription.unsubscribe();
    }
  }
}

