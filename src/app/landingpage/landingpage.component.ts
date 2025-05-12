import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private apiservice: AuthService, private router: Router) { }
  token = localStorage.getItem('token')
  
  getToken = {
    apiAccessSessionToken: `Bearer ${this.token}`
  }
signout(){
  this.apiservice.SignOut(this.getToken).subscribe({
    next: (response) => {
      localStorage.removeItem('token');
      this.router.navigate(['/signin']);
      console.log(response);
      alert(response.message);
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

