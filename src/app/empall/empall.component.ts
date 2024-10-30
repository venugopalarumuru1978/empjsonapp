import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empall',
  templateUrl: './empall.component.html',
  styleUrls: ['./empall.component.css']
})
export class EmpallComponent implements OnInit {

  constructor(private empServ:EmployeeService,
    private router:Router){
      
  }

  empinfo:Employee[] = [];

  ngOnInit(): void {
    this.EmployeeInfo();
  }

  EmployeeInfo():void
  {
    this.empServ.ShowAllEmployees().subscribe(data=>{
      this.empinfo = data;
      console.log(data);
    });
  }

  OneEmp(id:any):void
  {
    this.router.navigate(['/oneemp/', id]);
  }

  DeleteEmployee(eno:any)
  {
    if(confirm("Are u sure....")==true)
    {
      this.empServ.DeleteEmp(eno).subscribe(data=>{
        this.EmployeeInfo();        
      });
    }
  }

  ModEmp(id:any):void
  {
    this.router.navigate(['/modemp/', id]);
  }


}
