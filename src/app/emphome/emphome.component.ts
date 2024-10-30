import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent {

  eno:any = 0;
  emp:Employee = new Employee(0, "", "", 0.0, "", "");
  constructor(private empServ:EmployeeService, private router:Router)
  {
      this.eno = sessionStorage.getItem("eid");
      this.empServ.SearchEmployee(this.eno).subscribe(data=>{
        this.emp = data;
        console.log(data);
      });
  }
}
