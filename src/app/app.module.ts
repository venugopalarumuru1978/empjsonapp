import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpallComponent } from './empall/empall.component';
import { NewempComponent } from './newemp/newemp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OneempComponent } from './oneemp/oneemp.component';
import { ModempComponent } from './modemp/modemp.component';
import { LoginComponent } from './login/login.component';
import { EmphomeComponent } from './emphome/emphome.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpallComponent,
    NewempComponent,
    OneempComponent,
    ModempComponent,
    LoginComponent,
    EmphomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
