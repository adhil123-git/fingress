import { Component } from '@angular/core';
import { AuthService } from '../custom-services/auth.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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






  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  onSubmit(onboardingForm: NgForm) {

    if (onboardingForm.invalid) {
      onboardingForm.form.markAllAsTouched();
      return;
    }


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
    this.authService.onBoarding(sendingdata).subscribe({
      next: (response: any) => {
        this.snackBar.open(response.message, 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });

        onboardingForm.reset();
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open((err.error[0].errors[0].message), 'Close', {
          duration: 2500,
          verticalPosition: 'top',
        });

      }
    });
  }

}

