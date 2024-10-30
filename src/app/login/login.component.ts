import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg:string = "";
  username:string = "";
  pswd:string = "";
  flag:boolean = false;

  empinfo:Employee[] = [];

  constructor(private router:Router, private empServ:EmployeeService)
  {
    if(this.empServ.isAdminLoggedIn())
        sessionStorage.removeItem('adminLog');
    if(this.empServ.isEmpLoggedIn())
        sessionStorage.removeItem('einfo');
        
        this.empServ.ShowAllEmployees().subscribe(data=>{
        this.empinfo = data;
    });
  }

  LoginFun(form:any):void
  {
    if(form.valid)
    {
    if(this.username=="Admin" && this.pswd=="admin@123")
    {
        sessionStorage.setItem("adminLog", this.username);
        this.router.navigate(['/empall']);
    }
    else
    {
        let empcheck = false;
        for(let i=0;i<this.empinfo.length;i++)
        {
          if(this.empinfo[i].mailid==this.username && this.empinfo[i].pswd==this.pswd)
          {
            sessionStorage.setItem("einfo", this.username);
            sessionStorage.setItem("eid", this.empinfo[i].id.toString());
            empcheck = true;
            break;
          }
        }

        if(empcheck==true)
        {
          this.router.navigate(['/emphome'])
        }
        else
          this.msg = "Please check username /password";
    }
  }
    else
      alert("Invalid Form");
  }
}
