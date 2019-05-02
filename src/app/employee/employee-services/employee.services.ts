import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../../models/employee';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

    apiRegisterEmployee = environment.apiRegisterEmployee;
    apiGetEmployees = environment.apiGetEmployees;
    constructor(private http: HttpClient) { }

    /**
     * This function calls the API to register the employee
     * @param employee
     */
    registerEmployee(employee: IEmployee): Observable<any> {
        return this.http.post<any>(this.apiRegisterEmployee, employee);
    }

    /**
     * This function calls API to get the list of all employees
     */
    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this.apiGetEmployees);
    }
}
