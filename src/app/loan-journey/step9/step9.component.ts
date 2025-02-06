import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


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
  bankList: string[] = ['SBI', 'PNB', 'AXIS', 'Indusland','HDFC','ICICI','Credila','InCred','IDFC','Auxilo','Prodigy'];
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: this.ShowFilter
    };
  }
  
  onOptionChange() {
    if (this.selectedOption === 'No') {
      this.selectedBanks = [];
      this.showQuestionDiv = false;
    }
  }

  onBankSelectionChange() {
    // Logic if needed on bank selection change
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
}
