import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { Router } from '@angular/router';
import { OtpPopupComponent } from '../../common/otp-popup/otp-popup.component';
import { LoanJourneyService } from '../loan-journey.service';

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

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private loanJourneyService: LoanJourneyService,
  ) {
    this.stepOneForm = this.fb.group({
      //mobileno: this.fb.control('', Validators.required)
      mobileno: ['', [Validators.required, Validators.pattern(/^\d{10}$/), this.onlyDigitsValidator]]
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
    if (otp.length === this.config.length) {
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
  }

  stepOneSubmit() {
  }

  getOTP(): void {
    if (this.stepOneForm.controls['mobileno'].valid) {
      //this.openOtpPopup();
      this.sendOTP()
      this.showOtpComponent = true;
    } else {
      //alert('Please enter a valid mobile number.');
    }
  }
 
  nextStep() {
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
    const mobileNumber = this.stepOneForm.get('mobileno')?.value;
    this.correctOtp = Math.floor(10000 + Math.random() * 90000).toString();
    const textInput = `Your OTP for Account Login is ${this.correctOtp}`; 
    this.loanJourneyService.sendMessage(mobileNumber, textInput).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
  });
  }

}
