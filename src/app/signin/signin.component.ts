import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
signIn: FormGroup
constructor(private fb:FormBuilder ,private router:Router){
  this.signIn=this.fb.group({
    orgCode:['',Validators.required],
    loginId:['',Validators.required],
    password:['',Validators.required]
  })
}
onSubmit(){
  if(this.signIn.valid){
    alert("successfully login ");
    this.router.navigate(['/landingpage']);
  }

}
}
