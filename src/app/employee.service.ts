import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:9090/Employees";
  
  constructor(private httpClient:HttpClient) { }

  ShowAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  AddnewEmployee(emp:any):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,emp)
  }

  SearchEmployee(eno:any):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${eno}`);
  }

  DeleteEmp(eno:any):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${eno}`);
  }

  ModifyEmp(eno:any, emp:any):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${eno}`,emp);
  }

  isAdminLoggedIn()
  {
    return sessionStorage.getItem('adminLog')!=null;
  }

  isEmpLoggedIn()
  {
    return sessionStorage.getItem('einfo')!=null;
  }
}
