import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
  imports: [ReactiveFormsModule, CommonModule,ProgressBarComponent],
})
export class Step7Component implements OnInit {
  questionnaireForm: FormGroup;
  months: string[] = [];
  years: string[] = [];
  loanAmounts: string[] = ['Upto 12 Lakhs', '10-20 Lakhs', '20-50 Lakhs', '50-1cr', 'Above 1 cr'];
  submitted = false;
  courseStartMonth: string[] = ['January-March', 'April-June', 'July-September', 'October-December'];
  questionnaireFormDetails: any;
  selectedIntake: any;
  selectedStartMonth: any;
  selectedLoanAmount: any;
  selectedLoanType: any;
  selectedStartYear: any;

  constructor(private fb: FormBuilder, private router: Router,
    private sessionService: SessionService
  ) {
    this.questionnaireForm = this.fb.group({
      intake: ['', Validators.required],
      // startMonth: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanType: ['', Validators.required],
      startMonth: ['', Validators.required],
      startYear: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.generateMonths();
    this.generateYears();
    
    const questionnaireDetails = this.sessionService.getItem('questionnaireDetails');
    this.questionnaireFormDetails = questionnaireDetails ? JSON.parse(questionnaireDetails) : this.questionnaireFormDetails;
    setTimeout(() => {  
    this.selectedIntake = this.questionnaireFormDetails.intake ? this.questionnaireFormDetails.intake : '';
      this.selectedStartMonth = this.questionnaireFormDetails.startMonth ? this.questionnaireFormDetails?.startMonth : '';
      this.selectedLoanAmount = this.questionnaireFormDetails.loanAmount ? this.questionnaireFormDetails?.loanAmount : '';
      this.selectedLoanType = this.questionnaireFormDetails.loanType ? this.questionnaireFormDetails?.loanType : '';
      this.selectedStartYear = this.questionnaireFormDetails.startYear ? this.questionnaireFormDetails?.startYear : '';
       
      this.questionnaireForm.patchValue({
      intake: this.questionnaireFormDetails?.intake,
      loanAmount: this.questionnaireFormDetails?.loanAmount,
      loanType: this.questionnaireFormDetails?.loanType,
      startMonth: this.questionnaireFormDetails?.startMonth,
      startYear: this.questionnaireFormDetails?.startYear,
    });
  }, 0);
    
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
      this.selectedIntake = this.questionnaireForm.value.intake;
      this.selectedStartMonth = this.questionnaireForm.value.startMonth;
      this.selectedLoanAmount = this.questionnaireForm.value.loanAmount;
      this.selectedLoanType = this.questionnaireForm.value.loanType;
      this.selectedStartYear = this.questionnaireForm.value.startYear;
      this.sessionService.setItem('questionnaireDetails', JSON.stringify(this.questionnaireForm.value));
      this.nextStep();
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