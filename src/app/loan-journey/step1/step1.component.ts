import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OtpPopupComponent } from '../../common/otp-popup/otp-popup.component';

@Component({
  selector: 'app-step1',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component  implements OnInit {
  public stepOneForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog


  ) {
    this.stepOneForm = this.fb.group({
      mobileno: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  stepOneSubmit() {
  }

  openOtpPopup(): void {
    this.dialog.open(OtpPopupComponent, {
      width: '250px'
    });
  }
}
