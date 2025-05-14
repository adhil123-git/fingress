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
import { MatButton } from '@angular/material/button';
import { ModifyComponent } from './modify/modify.component';
import { ModifycustomerComponent } from './modifycustomer/modifycustomer.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ListuserComponent,
    OnboarduserComponent,
    LandingpageComponent,
    CustomerlistComponent,
    ModifyComponent,
    ModifycustomerComponent
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
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
