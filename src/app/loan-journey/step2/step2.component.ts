import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component  implements OnInit {
  public stepOneForm: FormGroup;
  currentStep: number = 1;
  countries = [
    { name: 'UK', image: 'assets/media/images/uk.png' },
    { name: 'US', image: 'assets/media/images/us.png' },
    { name: 'Australia', image: 'assets/media/images/australia.png' },
    { name: 'Canada', image: 'assets/media/images/canada.png' },
    { name: 'New Zealand', image: 'assets/media/images/new-zealand.png' },
    { name: 'Germany', image: 'assets/media/images/germany.png' },
    { name: 'India', image: 'assets/media/images/india.png' },
    { name: 'Others', image: 'assets/media/images/globe.jpg' }
  ];

  selectedCountry: string = '';
  universityName: string = ''; 
  constructor(
    private fb: FormBuilder
  ) {
    this.stepOneForm = this.fb.group({
      mobileno: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.sortCountries();
  }

  stepOneSubmit() {
  }

  selectCountry(country: any) {
    this.selectedCountry = country.name;
  }

  sortCountries() {
    this.countries = this.countries
      .filter(country => country.name !== 'Others')
      .sort((a, b) => a.name.localeCompare(b.name))
      .concat(this.countries.filter(country => country.name === 'Others'));
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

}
