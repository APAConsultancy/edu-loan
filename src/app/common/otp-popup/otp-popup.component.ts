import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-otp-popup',
  imports: [MatFormFieldModule],
  templateUrl: './otp-popup.component.html',
  styleUrls: ['./otp-popup.component.css']
})
export class OtpPopupComponent {
  constructor(public dialogRef: MatDialogRef<OtpPopupComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}