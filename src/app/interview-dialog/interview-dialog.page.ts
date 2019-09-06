import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Question } from './questions';

@Component({
  selector: 'app-interview-dialog',
  templateUrl: './interview-dialog.page.html',
  styleUrls: ['./interview-dialog.page.scss'],
})
export class InterviewDialogPage implements OnInit {

  interviewForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.interviewForm = this.formBuilder.group({
      companyName: new FormControl(''),
      yearsOfExpr: new FormControl(''),
      position: new FormControl(''),
      aboutInterview: new FormControl(''),
      feedback: new FormControl(''),
      questionsList: this.formBuilder.array([this.formBuilder.group({question: ''})])
    })
  }

  get questionsList() {
    return this.interviewForm.get('questionsList') as FormArray;
  }

  addQuestion() {
    this.questionsList.push(this.formBuilder.group({question:''}));
  }

  deleteQuestion(index) {
    this.questionsList.removeAt(index);
  }

  onSubmit(values){
    console.log(values);
  }
}
