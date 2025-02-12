import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class Step7Component implements OnInit {
  questionnaireForm: FormGroup;
  months: string[] = [];
  years: string[] = [];
  loanAmounts: string[] = ['Upto 12 Lakhs', '10-20 Lakhs', '20-50 Lakhs', '50-1cr', 'Above 1 cr'];
  submitted = false;
  courseStartMonth: string[] = ['January-March', 'April-June', 'July-September', 'October-December'];
  questionnaireFormDetails: any;

  constructor(private fb: FormBuilder, private router: Router,
    private sessionService: SessionService
  ) {
    this.questionnaireForm = this.fb.group({
      intake: ['', Validators.required],
      startMonth: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanType: ['', Validators.required],
      courseStartMonth: ['', Validators.required],
      startYear: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const questionnaireDetails = this.sessionService.getItem('questionnaireDetails');
    this.questionnaireFormDetails = questionnaireDetails ? JSON.parse(questionnaireDetails) : null;
    this.generateMonths();
    this.generateYears();
  }

  generateMonths() {
    const currentDate = new Date();
    for (let i = 0; i < 12; i++) {
      const month = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      this.months.push(month.toLocaleString('default', { month: 'long', year: 'numeric' }));
    }
  }

  generateYears() {
      const currentYear = new Date().getFullYear();
      for (let i = currentYear - 5; i <= currentYear + 5; i++) {
        this.years.push(i.toString());
      }
  }

  onSubmit() {
    if (this.questionnaireForm.valid) {
      console.log(this.questionnaireForm.value);
      this.sessionService.setItem('questionnaireDetails', JSON.stringify(this.questionnaireForm.value));
    } else {
      this.submitted = true;
    }
  }

  nextStep() {
    this.router.navigate(['/step8']);
  }

  previousStep() {
    this.router.navigate(['/step6']);
  }
}