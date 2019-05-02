import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatDatepickerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatIconModule
} from '@angular/material';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './employee-services/employee.services';
import { HttpClientModule } from '@angular/common/http';

const routeOptions: Routes = [
  {
    path: 'register', component: EmployeeRegistrationComponent
  },
  {
    path: 'list', component: EmployeeListComponent
  },
  {
    path: '', redirectTo: 'list'
  }
];

@NgModule({
  imports: [
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routeOptions)
  ],
  exports: [RouterModule],
  declarations: [
    EmployeeRegistrationComponent,
    EmployeeListComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
