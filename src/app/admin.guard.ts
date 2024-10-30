import { CanActivateFn, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const empServ = inject(EmployeeService);
  let chkuser = false;
  const router = inject(Router);
  if(empServ.isAdminLoggedIn()==true)
  {
    if (route.url.length > 0) 
    {
      let menu = route.url[0].path;
      console.log(menu);
      if(menu=="empall"||menu=="newemp")
          chkuser = true;
      else
      {
        alert("First Login");
        router.navigate(['/login']);
      }
    }
  }
  else  
  {
    alert("First Login");
    router.navigate(['/login']);
  }
  return chkuser;
};
