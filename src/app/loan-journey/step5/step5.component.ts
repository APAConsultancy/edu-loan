import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step5',
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component {
  Universities: string[] = ['ABC','XYZ'];
  country = sessionStorage.getItem('selectedCountry');

  selectedUniversity: string = '';

  constructor() { }

  onUniversityChange() {
    // You can add additional logic here if needed
    console.log('Selected University:', this.selectedUniversity);
  }
}
