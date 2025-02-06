import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-step9',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule],
  templateUrl: './step9.component.html',
  styleUrl: './step9.component.css'
})
export class Step9Component {
  selectedOption: string = '';
  selectedBanks: string[] = [];
  bankList: string[] = ['SBI', 'PNB', 'AXIS', 'Indusland','HDFC','ICICI','Credila','InCred','IDFC','Auxilo','Prodigy'];
  onOptionChange() {
    if (this.selectedOption === 'No') {
      this.selectedBanks = [];
    }
  }

  onBankSelectionChange() {
    // Logic if needed on bank selection change
  }

}
