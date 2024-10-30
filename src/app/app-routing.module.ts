import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { EmpallComponent } from './empall/empall.component';
import { NewempComponent } from './newemp/newemp.component';
import { OneempComponent } from './oneemp/oneemp.component';
import { ModempComponent } from './modemp/modemp.component';
import { LoginComponent } from './login/login.component';
import { adminGuard } from './admin.guard';
import { EmphomeComponent } from './emphome/emphome.component';
import { employeeGuard } from './employee.guard';
const routes: Routes = [
  {path:"", component:LoginComponent},  
  {path:"login", component:LoginComponent},  
  {path:"empall", component:EmpallComponent, canActivate:[adminGuard]},
  {path:"newemp", component:NewempComponent, canActivate:[adminGuard]},
  {path:"oneemp/:id", component:OneempComponent},
  {path:"modemp/:id", component:ModempComponent},
  {path:"emphome", component:EmphomeComponent, canActivate:[employeeGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
