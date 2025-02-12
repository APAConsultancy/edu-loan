import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoanJourneyService } from '../loan-journey.service';
import { SessionService } from '../../common/services/session.service';


@Component({
  selector: 'app-step9',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule, NgMultiSelectDropDownModule],
  templateUrl: './step9.component.html',
  styleUrl: './step9.component.css'
})
export class Step9Component {
  selectedOption: string = '';
  selectedBanks: string[] = [];
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  dropdownSettings: any = {};
  showBankImage = false;
  showQuestionDiv = true;
  bankList: any= [];
  // bankList: string[] = ['SBI', 'PNB', 'AXIS', 'Indusland','HDFC','ICICI','Credila','InCred','IDFC','Auxilo','Prodigy'];
  
  constructor(private fb: FormBuilder, private router: Router,
    private loanJourneyService: LoanJourneyService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        itemsShowLimit: 3,
        allowSearchFilter: this.ShowFilter,
        enableCheckAll: false
    };
    this.getBankNames();
  }
  
  onOptionChange() {
    if (this.selectedOption === 'No') {
      this.selectedBanks = [];
      this.showQuestionDiv = false;
    }
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  onDropdownClose() {
    // Show the bank image when the dropdown is closed
    this.showBankImage = this.selectedBanks.length > 0;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const dropdown = document.querySelector('.multiselect-dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.showBankImage = this.selectedBanks.length > 0;
      if(this.showBankImage) this.showQuestionDiv = false;
    }
  }

  nextStep() {
    this.router.navigate(['/step10']);
  }

  previousStep() {
    this.router.navigate(['/step8']);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  addAlreadyAppliedDetails(): void {
    const phoneNumber = this.sessionService.getItem('mobile');
    if (phoneNumber) {
      this.loanJourneyService.addAlreadyAppliedDetails(phoneNumber, this.selectedBanks).subscribe(
        (response) => {
          console.log('Details added successfully', response);
        },
        (error) => {
          console.error('Error adding details', error);
        }
      );
    }
  }

  onBankSelect(event: any): void {
    const bankName = event.name;
    this.addAlreadyAppliedDetails();
  }

  onBankDeSelect(event: any): void {
    const bankName = event.name;
    this.addAlreadyAppliedDetails();
  }

  getBankNames(): void {
    this.loanJourneyService.getBankNames().subscribe(
      (response) => {
        this.bankList = response.map((bank: any) => bank.BankName1);
      },
      (error) => {
        console.error('Error fetching bank names', error);
      }
    );
  }
}
