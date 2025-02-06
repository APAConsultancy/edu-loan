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
  countries: string[] = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'Singapore',
    'New Zealand',
    'Netherlands'
  ];

  selectedCountry: string = '';

  onCountryChange() {
    // You can add additional logic here if needed
    console.log('Selected country:', this.selectedCountry);
  }
  // country = sessionStorage.getItem('selectedCountry');
}
