import { NgModule } from '@angular/core';
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

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },

  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'landingpage',
    component: LandingpageComponent,
    children: [
     {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
     {path:'dashboard',component:DashboardComponent},
      { path: 'listuser', component: ListuserComponent },
      { path: 'customerlist', component: CustomerlistComponent },
      { path: 'onboarduser', component: OnboarduserComponent },
      { path: 'modify', component: ModifyComponent },
      {path:'modifycustomer',component:ModifycustomerComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
