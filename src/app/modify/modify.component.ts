import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  userName: any= '';
 userId: any = '';

  constructor(private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'];
      this.userId = params['userId'];
    });
  }


onSubmit(modifyform:NgForm) {
  const payload={
    
  "actionCode": "update",
  "userData": {
    "userId": "168",
    "firstName": "John",
    "lastName": "R",
    "emailAddress": "test@gmail.com",
    "mobileNumber": "8912314112"
  }

  }
}








  back(){
    this.router.navigate(['/landingpage/listuser']);
  }
}