import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-joincommunity',
  imports: [],
  templateUrl: './joincommunity.component.html',
  styleUrls: ['./joincommunity.component.css']
})
export class JoincommunityComponent {
  constructor(private dialogRef: MatDialogRef<JoincommunityComponent>) {}
  closePopup() {
    this.dialogRef.close(); // ✅ Closes the popup
  }
}
