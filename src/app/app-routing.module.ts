import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee/employee-registration/employee-registration.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'employee',
                loadChildren: './employee/employee.module#EmployeeModule'
            },
            {
                path: '',
                redirectTo: 'employee',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'employee'
            }
        ])
    ]
})
export class AppRoutingModule {

}
