// signin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  orgCode = '';
  loginId = '';
  password = '';


  constructor(private router: Router, private authService: AuthService,private snackBar:MatSnackBar) { }

  onSubmit(signinForm: NgForm) {

    if (signinForm.invalid) {
      signinForm.form.markAllAsTouched();
      return;
    }

    if (signinForm.valid) {
      const logindata = {
        orgCode: this.orgCode,
        loginId: this.loginId,
        keyword: this.password
      };

      console.log(logindata);
      this.authService.signIn(logindata).subscribe(
        {
          next: (response) => {
            let status = response.status;
            this.snackBar.open(status, 'Close', {
              duration: 2000,
              verticalPosition: 'top',
            });
            let token = response.session.apiAccessSessionToken;
            localStorage.setItem('token', token);
            this.router.navigate(['/landingpage']);
          },
          error: (error) => {
            console.error('Login failed', error);
           
             this.snackBar.open('Invalid Credintials', 'Close', {
              duration: 2000,
              verticalPosition: 'top',
            });
     
          }
        });
    }
  }
}