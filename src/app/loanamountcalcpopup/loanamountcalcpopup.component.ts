import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule, FormControl  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loanamountcalcpopup',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './loanamountcalcpopup.component.html',
  styleUrl: './loanamountcalcpopup.component.css'
})
export class LoanamountcalcpopupComponent {
  
  tutionFee: number = 0;
  accomodation: number = 0;
  booksOther: number = 0;
  travelInsurance: number = 0;
  miscellaneous: number = 0;
  selffunding: number = 0;

  totalFunding: number = 0;
  loanAmountRequired: number = 0;
  coveredPercentage: number = 0;
  totalCost: number = 0;
  calculateLoanAmount() {
    this.totalCost = this.tutionFee + this.accomodation + this.booksOther + this.travelInsurance + this.miscellaneous;
    this.totalFunding =this.selffunding;
    this.loanAmountRequired = this.totalCost - this.totalFunding;
    this.coveredPercentage = Math.min((this.totalFunding / this.totalCost) * 100, 100);
  }

  resetValues() {
    this.tutionFee = 0;
    this.accomodation = 0;
    this.booksOther = 0;
    this.travelInsurance = 0;
    this.miscellaneous = 0;
    this.selffunding =0;
    this.calculateLoanAmount();
  }  
}
