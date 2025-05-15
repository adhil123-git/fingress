import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListuserComponent } from './listuser/listuser.component';
import { OnboarduserComponent } from './onboarduser/onboarduser.component';
import { RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { ModifyComponent } from './modify/modify.component';
import { ModifycustomerComponent } from './modifycustomer/modifycustomer.component';
import { SessionDialogComponent } from './session-dialog/session-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ListuserComponent,
    OnboarduserComponent,
    LandingpageComponent,
    CustomerlistComponent,
    ModifyComponent,
    ModifycustomerComponent,
    SessionDialogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule



 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
