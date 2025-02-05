import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { Router } from '@angular/router';
import { OtpPopupComponent } from '../../common/otp-popup/otp-popup.component';

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
  correctOtp = '12345'; // Example correct OTP for validation

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
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

  validateAndOpenOtpPopup(): void {
    if (this.stepOneForm.controls['mobileno'].valid) {
      //this.openOtpPopup();
      this.showOtpComponent = true;
    } else {
      //alert('Please enter a valid mobile number.');
    }
  }
  // openOtpPopup(): void {
  //   this.dialog.open(OtpPopupComponent, {
  //     width: '250px'
  //   });
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
    if (this.stepOneForm.controls['source'].valid) {
      this.router.navigate(['/step2']);
    } else {
      alert('Please select an option.');
    }
  }
}
