import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-modemp',
  templateUrl: './modemp.component.html',
  styleUrls: ['./modemp.component.css']
})
export class ModempComponent {

  eno:number = 0;
  emp:Employee = new Employee(0, "", "", 0.0, "", "");
  constructor(private empServ:EmployeeService,
    private router:Router, private aRoute:ActivatedRoute){
      
      this.eno = this.aRoute.snapshot.params['id'];

      this.empServ.SearchEmployee(this.eno).subscribe(data=>{
       this.emp = data;
      });
  }

  UpdateEmp():void
  {
    this.empServ.ModifyEmp(this.eno, this.emp).subscribe(data=>{
      this.router.navigate(['/empall']);
    });
  }
}
