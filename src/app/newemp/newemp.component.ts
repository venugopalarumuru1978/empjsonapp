import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent {

  emp:Employee = new Employee(0, "","", 0.0, "", "");

  constructor(private empServ:EmployeeService, private router:Router)
  {

  }

  AddNewEmp():void
  {
    this.empServ.AddnewEmployee(this.emp).subscribe(data=>{
      console.log(data);
      //alert("Employee is Added..")
      this.router.navigate(['/empall']);
    });
  }

}
