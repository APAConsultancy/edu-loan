import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { Router } from '@angular/router';
import { OtpPopupComponent } from '../../common/otp-popup/otp-popup.component';
import { LoanJourneyService } from '../loan-journey.service';
import { SessionService } from '../../common/services/session.service';

@Component({
  selector: 'app-step1',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgOtpInputModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component  implements OnInit {
  public stepOneForm: FormGroup;
  otp: string | undefined;
  showOtpComponent = false;
  showMobileComponent = false;
  correctOtp: string | undefined;
  mobile: any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private loanJourneyService: LoanJourneyService,
    private sessionService: SessionService
  ) {
    this.stepOneForm = this.fb.group({
      //mobileno: this.fb.control('', Validators.required)
      mobileno: ['', [Validators.required, Validators.pattern(/^\d{10}$/), this.onlyDigitsValidator]],
      source: ['']
    });
  }

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  onOtpChange(otp: string): void {
    this.otp = otp;
    if (otp?.length === this.config.length) {
      this.validateOtp();
    }
  }
  validateOtp(): void {
    if (this.otp === this.correctOtp) {
      this.showMobileComponent = true;
     
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }

  ngOnInit(): void {
    this.sessionService.removeAll();
    if(window !== undefined){
      window.scrollTo(0, 0); // Ensure the page scrolls to top on load
      }
  }

  stepOneSubmit() {
  }

  getOTP(): void {
    if (this.stepOneForm.controls['mobileno'].valid) {
      //this.openOtpPopup();
      this.mobile = this.stepOneForm.get('mobileno')?.value;
      this.sessionService.setItem('mobile', this.mobile);
      this.sendOTP()
      this.showOtpComponent = true;
    } else {
      //alert('Please enter a valid mobile number.');
    }
  }
 
  nextStep() {
    const selectedValue = this.stepOneForm.get('source')?.value;
    this.savePreDetails(this.mobile, 'Verified', selectedValue);
    this.router.navigate(['/step2']);
  }

  // previousStep() {
  //   this.router.navigate(['/step2']);
  // }

  onlyDigitsValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (/^\d+$/.test(value)) {
      return null;
    } else {
      return { invalidNumber: true };
    }
  }

  goToStep2(): void {
      this.router.navigate(['/step2']);
  }


  sendOTP(): void {
    const mobileNumber = '91' + this.stepOneForm.get('mobileno')?.value;
    this.correctOtp = Math.floor(10000 + Math.random() * 90000).toString();
    //const textInput = `Your OTP for Account Login is ${this.correctOtp}`; 
    //console.log(this.correctOtp);
    const textInput = `Your OTP for account login is ${this.correctOtp}, please do not share it with anyone.  UNIFUND FINTECH SOLUTIONS.`;
    const encodedText = encodeURIComponent(textInput);
    this.loanJourneyService.sendMessage(mobileNumber, encodedText).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
  });
  }

  savePreDetails(mobileNumber: any, status: any, hearAboutUs: any): void { 
    this.loanJourneyService.savePreDetails(mobileNumber, status, hearAboutUs).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
    });
  }

}
