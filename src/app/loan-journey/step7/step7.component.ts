import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class Step7Component implements OnInit {
  questionnaireForm: FormGroup;
  months: string[] = [];
  loanAmounts: string[] = ['Upto 12 Lakhs', '10-20 Lakhs', '20-50 Lakhs', '50-1cr', 'Above 1 cr'];
  submitted = false;
  courseStartMonth: string[] = ['January-March', 'April-June', 'July-September', 'October-December'];

  constructor(private fb: FormBuilder) {
    this.questionnaireForm = this.fb.group({
      intake: ['', Validators.required],
      startMonth: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanType: ['', Validators.required],
      courseStartMonth: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.generateMonths();
  }

  generateMonths() {
    const currentDate = new Date();
    for (let i = 0; i < 12; i++) {
      const month = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      this.months.push(month.toLocaleString('default', { month: 'long', year: 'numeric' }));
    }
  }

  onSubmit() {
    if (this.questionnaireForm.valid) {
      console.log(this.questionnaireForm.value);
    } else {
      this.submitted = true;
    }
  }
}