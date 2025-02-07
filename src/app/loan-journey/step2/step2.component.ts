import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    // { name: 'India', image: 'assets/media/images/india.png' },
    { name: 'Others', image: 'assets/media/images/globe.jpg' },
    { name: 'Singapore', image: 'assets/media/images/singapore.png' }
  ];

  selectedCountry: string = '';
  universityName: string = ''; 
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.stepOneForm = this.fb.group({
      mobileno: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.sortCountries();
  }

  stepOneSubmit() {
    sessionStorage.setItem('selectedCountry', this.selectedCountry);
  }

  selectCountry(country: any) {
    this.selectedCountry = country.name;
    sessionStorage.setItem('selectedCountry', this.selectedCountry);
    this.stepOneSubmit();
    this.goToStep3();
  }

  sortCountries() {
    this.countries = this.countries
      .filter(country => country.name !== 'Others')
      .sort((a, b) => a.name.localeCompare(b.name))
      .concat(this.countries.filter(country => country.name === 'Others'));
  }

  nextStep() {
    this.router.navigate(['/step3']);
  }

  previousStep() {
    this.router.navigate(['/step1']);
  }

  goToStep3(): void {
      this.router.navigate(['/step3']);
  }

}
