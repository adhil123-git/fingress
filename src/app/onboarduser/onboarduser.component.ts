import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-onboarduser',
  templateUrl: './onboarduser.component.html',
  styleUrls: ['./onboarduser.component.css']
})
export class OnboarduserComponent {
  partyName = '';
  partyCode = '';
  email = '';
  phone = '';
  userid = '';
  firstname = '';
  lastname = '';
  useremail = '';
  userphone = '';

 
  

  constructor(private authService: AuthService) {}

  onSubmit(onboardingForm: NgForm){

    if (onboardingForm.invalid) {
    onboardingForm.form.markAllAsTouched();
    return; 
  }

    if (onboardingForm.valid) {

      const sendingdata = {
        partyData: {
          partyCode: this.partyCode,
          partyName: this.partyName,
          emailAddress: this.email,
          mobileNumber: this.phone
        },
        userData: {
          userId: this.userid,
          firstName: this.firstname,
          lastName: this.lastname,
          emailAddress: this.useremail,
          mobileNumber: this.userphone
        }
      };

console.log(sendingdata);
      this.authService. onBoarding(sendingdata).subscribe({
        next: (response: any) => {
          alert(response.message)
          onboardingForm.reset();
        },
       
        
        error: () => {
          alert('error while onboarding.');
        }
       
      });
    } 
     
  }}
  
