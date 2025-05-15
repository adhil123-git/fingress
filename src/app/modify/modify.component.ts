import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  userName: any= '';
  firstname: any= '';
  lastName: any= '';
  userId: any = '';
  userEmailaddress: any = '';
  userMobilenumber: any = '';

  constructor(private route: ActivatedRoute ,private router:Router,private authService:AuthService) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      const username=params['userName'];
      this.firstname = username.split(' ')[0];
      this.lastName = username.split(' ')[1];
      this.userId = params['userId'];
      this.userEmailaddress = params['userEmailaddress'];
      this.userMobilenumber = params['userMobilenumber'];
    });
  }


onSubmit(modifyform:NgForm) {
  const payload = {
    actionCode: "update",
    userData: {
      userId: this.userId,
      firstName: this.firstname,
      lastName: this.lastName,
      emailAddress: this.userEmailaddress,
      mobileNumber: this.userMobilenumber,
      parentPartyCode: "ABC"
    }
  }
  this.authService.modifyuser(payload).subscribe({
    next:(res) => {
       console.log(res);
       alert(res.message)

    },
    error:(err) => {
      console.log(err);
      
    }
  });
}








  back(){
    this.router.navigate(['/landingpage/listuser']);
  }
}