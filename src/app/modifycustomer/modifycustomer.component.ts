import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modifycustomer',
  templateUrl: './modifycustomer.component.html',
  styleUrls: ['./modifycustomer.component.css']
})
export class ModifycustomerComponent {
 partyName: any= '';
 partyCode: any = '';
 partyEmailaddress: any = '';
 partyMobilenumber: any = '';
  constructor(private route: ActivatedRoute ,private router:Router, private authService: AuthService) {}


  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.partyName = params['partyName'];
      this.partyCode = params['partyCode'];
      this.partyEmailaddress = params['partyEmailaddress'];
      this.partyMobilenumber = params['partyMobilenumber'];
    });
  }
  onSubmit(modifycustomerform:NgForm) {
    
    if (modifycustomerform.invalid) {
    modifycustomerform.form.markAllAsTouched();
    return; 
  }
  
 
    const payload = {
      actionCode: "update",
      partyData: {
        partyCode: this.partyCode,
        partyName: this.partyName,
        emailAddress: this.partyEmailaddress,
        mobileNumber: this.partyMobilenumber
      }
    }

    this. authService.modifycustomer(payload).subscribe({
      next: (res) => {
        console.log(res);
         if (res.status=="success") {
            alert('Customer updated successfully');
            this.router.navigate(['/landingpage/customerlist']);
          } else {
            alert('Failed to update customer');
          }
  
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  back(){
    this.router.navigate(['/landingpage/customerlist']);
  }
}
