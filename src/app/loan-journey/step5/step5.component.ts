import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { LoanJourneyService } from '../loan-journey.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-step5',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, AutocompleteLibModule, ProgressBarComponent],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component implements OnInit {
  UniversityName = 'UniversityName';
  Universities: { Id: number; UniversityName: string; }[] =[];
  country = sessionStorage.getItem('selectedCountry');
  isTransitioning = false;
  selectedUniversity: string = '';

  constructor(private router: Router,
    private sessionService: SessionService,
    private loanJourneyService: LoanJourneyService,
    private transitionService: TransitionService
  ) { 
    this.transitionService.isTransitioning$.subscribe(
      (status) => (this.isTransitioning = status)
    ); 
  }

  ngOnInit(): void {
    if (this.sessionService) {
        this.selectedUniversity = this.sessionService.getItem('selectedUniversity') || '';
    }
    this.getUniversities();
    // this.country = this.sessionService.getItem('selectedCountry');
    // if (this.country) {
    //   this.getUniversityDetails(this.country);
    // }
  }

  onUniversityChange() {
    // You can add additional logic here if needed
    console.log('Selected University:', this.selectedUniversity);
    this.sessionService.setItem('selectedUniversity', this.selectedUniversity);
    this.router.navigate(['/step6']);
  }

  nextStep() {
    this.transitionService.startTransition();
    setTimeout(() => {
    this.router.navigate(['/step6']);
    }, 3500);
  }

  previousStep() {
    this.router.navigate(['/step4']);
  }

  selectEvent(item: any) {
    this.transitionService.startTransition();
    setTimeout(() => {
    console.log('Selected item:', item);
    this.selectedUniversity = item.UniversityName;
    this.sessionService.setItem('selectedUniversity', this.selectedUniversity);
    this.router.navigate(['/step6']);
  }, 3500);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e : any){
    // do something when input is focused
  }

  // getUniversityDetails(countryName: string): void {
  //   this.loanJourneyService.getUniversityDetailsByCountryName(countryName).subscribe(
  //     (response) => {
  //       console.log('University details:', response);
  //       this.Universities = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching university details', error);
  //     }
  //   );
  // }

  getUniversities(): void {
    const universitiesData = this.sessionService.getItem('universities');
    if (universitiesData) {
      this.Universities = JSON.parse(universitiesData);
    } else {
      // Fetch universities data if not available in session
      if (this.country) {
        this.loanJourneyService.getUniversityDetailsByCountryName(this.country).subscribe(
        (response) => {
          this.Universities = response;
          this.sessionService.setItem('universities', JSON.stringify(this.Universities));
        },
        (error) => {
          console.error('Error fetching universities', error);
        });
      }
    }
  }
}

