import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './signin/signin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { OnboarduserComponent } from './onboarduser/onboarduser.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'landingpage',
    component: LandingpageComponent,
    children: [
      { path: '', redirectTo: 'listuser', pathMatch: 'full' }, 
      { path: 'listuser', component: ListuserComponent },
      { path: 'onboarduser', component: OnboarduserComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
