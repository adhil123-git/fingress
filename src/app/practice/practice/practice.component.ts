import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  isHighlighted = false;
 exampleForm: FormGroup;
 submittednumber:string='';

  constructor(private fb: FormBuilder) {
    this.exampleForm = this.fb.group({
      number: ['']
    });}
    onSubmit(){
      this.submittednumber=this.exampleForm.value.number
    }
}
