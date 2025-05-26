import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './signin/signin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { OnboarduserComponent } from './onboarduser/onboarduser.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ModifyComponent } from './modify/modify.component';
import { ModifycustomerComponent } from './modifycustomer/modifycustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CsspracticeComponent } from './practice/csspractice/csspractice.component';
import { PracticeComponent } from './practice/practice/practice.component';
import { PdfComponent } from './practice/pdf/pdf.component';
import { StepperformComponent } from './practice/stepperform/stepperform.component';
import { AuthenticationGuard } from './custom-services/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },

  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'landingpage',
    component: LandingpageComponent,
    // canActivate: [AuthenticationGuard],
    children: [
     {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
     {path:'dashboard',component:DashboardComponent},
      { path: 'listuser', component: ListuserComponent },
      { path: 'customerlist', component: CustomerlistComponent,title:'bluescope customer list' },
      { path: 'onboarduser', component: OnboarduserComponent },
      { path: 'modify', component: ModifyComponent },
      {path:'modifycustomer',component:ModifycustomerComponent},
      {path:'csspractice',component:CsspracticeComponent},
      {path:'practice',component:PracticeComponent},
      {path:'pdf', component:PdfComponent},
      {path:'stepperform', component:StepperformComponent},
     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
