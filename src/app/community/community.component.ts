import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoincommunityComponent } from '../joincommunity/joincommunity.component';

@Component({
  selector: 'app-community',
  imports: [],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(JoincommunityComponent, {
      width: '400px', // Adjust size
      //height: '500px' // Adjust size
    });
  }

}
