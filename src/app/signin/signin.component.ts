// signin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  orgCode = '';
  loginId = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form: any) {
    if (form.valid) {
      const payload = {
        orgCode: this.orgCode,
        loginId: this.loginId,
        keyword: this.password 
      };

      this.authService.login(payload).subscribe(
        (response: any) => {
          alert('Successfully logged in');

          // Optional: Store token if needed
          localStorage.setItem('token', response.session.apiAccessSessionToken);

          this.router.navigate(['/landingpage']);
        },
        (error) => {
          alert('Login failed. Please try again.');
          console.error(error);
        }
      );
    }
  }
}
