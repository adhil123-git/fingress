import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

(<any>pdfMake).addVirtualFileSystem(pdfFonts);

@Component({
  selector: 'app-stepperform',
  templateUrl: './stepperform.component.html',
  styleUrls: ['./stepperform.component.css'],
  providers: [{ provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }]
})
export class StepperformComponent {
  isLinear = true;
  wholedata: any = {};
standardoption=['LKG','UKG','I STD','II STD','III STD','IV STD','V STD','VI STD','VII STD','VIII STD','XI STD','X STD','XI STD','XII STD']

  constructor(private fb: FormBuilder, private dp: DatePipe,private snackbar:MatSnackBar) { }

  studentdetail = this.fb.group({
    firstname: ['', Validators.required],
    secondname: ['', Validators.required],
    dob: ['', Validators.required],
    age: ['', Validators.required],
    bloodgroup: ['', Validators.required],
    gender: ['', Validators.required]
  });

  parentdetail = this.fb.group({
    fathername: ['', Validators.required],
    mothername: ['', Validators.required],
    mobilenumber: ['', [Validators.required]],
    address: ['', Validators.required]
  });

  academicdetail = this.fb.group({
    previousschool: ['', Validators.required],
    standardselection: ['', Validators.required],
    grade: ['', Validators.required],
    activities: ['', Validators.required]
  });

  academicdetailforcurrentschool = this.fb.group({
    standardselectionforcurrentschool: ['', Validators.required],
    groupselection: ['', Validators.required]

  });

  next(){
    if(this.studentdetail.invalid){
    this.snackbar.open('please fill all the fields', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });
        return;
    }

  }





  submitall() {
    if (this.studentdetail.valid && this.parentdetail.valid && this.academicdetail.valid && this.academicdetailforcurrentschool.valid) {
      this.wholedata = {
        studentDetails: this.studentdetail.value,
        parentDetails: this.parentdetail.value,
        previousAcademicDetails: this.academicdetail.value,
        currentAcademicDetails: this.academicdetailforcurrentschool.value
      };

      console.log('data collected', this.wholedata);
         this.snackbar.open('Form submitted successfully', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });

    } else {
      console.log('Please fill all required fields');
       this.snackbar.open('please fill all the details', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });
    }
  }


  generate() {
    {
      const data = this.wholedata;
      const date = this.dp.transform(data.studentDetails.dob)
      {
        const studentpdf = {

          content: [
            { text: 'ADMISSION DETAIL', marginLeft: 190, marginBottom: 30 },
            { text: 'Student Detail', bold: true, marginBottom: 10 },
            {
              table: {
                widths: ['*', '*', '*', '*', '*'],
                body: [
                  [{ text: 'Name', bold: true }, { text: 'Date of Birth', bold: true }, { text: 'Age', bold: true }, { text: 'Blood group', bold: true }, { text: 'Gender', bold: true }],
                  [` ${data.studentDetails.firstname}  ${data.studentDetails.secondname}`, `${date}`, `${data.studentDetails.age}`,
                  `${data.studentDetails.bloodgroup}`, `${data.studentDetails.gender}`]
                ]
              },
            },
            { text: 'Parent Detail', bold: true, marginTop: 10, marginBottom: 10 },
            {
              table: {
                widths: ['*', '*', '*', '*', '*'],
                body: [
                  [{ text: 'Father Name', bold: true }, { text: 'Mother Name', bold: true }, { text: 'Age', bold: true }, { text: 'Mobile Number', bold: true }, { text: 'Address', bold: true }],
                  [`${data.parentDetails.fathername}`, `${data.parentDetails.mothername}`,
                  `${data.studentDetails.age}`, `${data.parentDetails.mobilenumber}`,
                  `${data.parentDetails.address}`
                  ]
                ]
              },
            },
            { text: 'previous Academic Details', bold: true, marginBottom: 10, marginTop: 10 },
            {
              table: {

                widths: ['*', '*', '*', '*'],
                body: [
                  [{ text: 'School name', bold: true }, { text: 'Standard', bold: true }, { text: 'Grade', bold: true }, { text: 'Extra Curricular Activities', bold: true }],
                  [`${data.previousAcademicDetails.previousschool}`,
                  `${data.previousAcademicDetails.standardselection}`,
                  `${data.previousAcademicDetails.grade}`,
                  `${data.previousAcademicDetails.activities}`],
                ]
              }
            },
            { text: 'Current Academic Detail', bold: true, marginBottom: 10, marginTop: 10 },
            {
              table: {
                widths: ['*', '*'],
                body: [
                  [{ text: 'Standard', bold: true }, { text: 'Group Selection', bold: true }],
                  [`${data.currentAcademicDetails.standardselectionforcurrentschool}`,
                  `${data.currentAcademicDetails.groupselection}`]
                ]
              }
            }
          ]
        }
        pdfMake.createPdf(studentpdf).open();
      }
    }
  }

}
