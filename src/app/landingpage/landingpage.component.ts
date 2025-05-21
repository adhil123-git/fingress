import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent  {
  constructor(private apiservice: AuthService, private router: Router, private snackBar: MatSnackBar, private route:ActivatedRoute) { }
  token = localStorage.getItem('token');
  // orgCode = this.route.snapshot.paramMap.get('orgCode');
  getToken = {
    apiAccessSessionToken: `${this.token}`
  }
  signout() {
    this.apiservice.SignOut(this.getToken).subscribe({
      next: (response) => {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
        this.snackBar.open(response.message, 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        
        });
      },
      error: (err) => {
        console.log(err);

      }
    });
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}

