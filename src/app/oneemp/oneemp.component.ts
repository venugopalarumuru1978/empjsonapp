import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-oneemp',
  templateUrl: './oneemp.component.html',
  styleUrls: ['./oneemp.component.css']
})
export class OneempComponent {

  eno:number = 0;
  emp:Employee = new Employee(0, "", "", 0.0, "", "");

  constructor(private empServ:EmployeeService,
    private router:Router,
    private aRoute:ActivatedRoute){
    
      this.eno = this.aRoute.snapshot.params['id'];
      this.empServ.SearchEmployee(this.eno).subscribe(data=>{
        this.emp = data;
        console.log(data);
      });
  }
}
