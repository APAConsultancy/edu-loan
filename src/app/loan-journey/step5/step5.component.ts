import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { LoanJourneyService } from '../loan-journey.service';

@Component({
  selector: 'app-step5',
  imports: [FormsModule,ReactiveFormsModule, CommonModule, AutocompleteLibModule],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component implements OnInit {
  UniversityName = 'UniversityName';
  Universities: { Id: number; UniversityName: string; }[] =[];
   country = sessionStorage.getItem('selectedCountry');

  selectedUniversity: string = '';

  constructor(private router: Router,
    private sessionService: SessionService,
    private loanJourneyService: LoanJourneyService
  ) { }

  ngOnInit(): void {
    if (this.sessionService) {
        this.selectedUniversity = this.sessionService.getItem('selectedUniversity') || '';
    }
    const country = this.sessionService.getItem('selectedCountry');
    if (country) {
      this.getUniversityDetails(country);
    }
  }

  onUniversityChange() {
    // You can add additional logic here if needed
    console.log('Selected University:', this.selectedUniversity);
    this.sessionService.setItem('selectedUniversity', this.selectedUniversity);
    this.router.navigate(['/step6']);
  }

  nextStep() {
    this.router.navigate(['/step6']);
  }

  previousStep() {
    this.router.navigate(['/step4']);
  }

  selectEvent(item: any) {
    console.log('Selected item:', item);
    this.router.navigate(['/step6']);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e : any){
    // do something when input is focused
  }

  getUniversityDetails(countryName: string): void {
    this.loanJourneyService.getUniversityDetailsByCountryName(countryName).subscribe(
      (response) => {
        console.log('University details:', response);
        this.Universities = response;
      },
      (error) => {
        console.error('Error fetching university details', error);
      }
    );
  }
}
