import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-interview-dialog',
  templateUrl: './interview-dialog.page.html',
  styleUrls: ['./interview-dialog.page.scss'],
})
export class InterviewDialogPage implements OnInit {


  interviewForm: any;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.interviewForm = this.formBuilder.group({
      companyName: new FormControl(''),
      yearsOfExpr: new FormControl(''),
      position: new FormControl(''),
      aboutInterview: new FormControl(''),
      feedback: new FormControl('')
    })
  }

  onSubmit(values){
    console.log(values);
  }
}
