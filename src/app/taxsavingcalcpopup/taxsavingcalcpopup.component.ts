import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taxsavingcalcpopup',
  imports: [FormsModule, CommonModule],
  templateUrl: './taxsavingcalcpopup.component.html',
  styleUrl: './taxsavingcalcpopup.component.css'
})
export class TaxsavingcalcpopupComponent implements OnInit {
  ngOnInit() {
    if(window !== undefined){
    window.scrollTo(0, 0); // Ensure the page scrolls to top on load
    }
  }

  loanAmount: number = 100000;
  interestRate: number = 7;
  interestPaid: number = 0;
  effectiveRate: number = 0;
  taxSavings: number = 0;
  selectedTaxSlab: number = 5;

  updateLoanValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.loanAmount = Math.max(100000, Math.min(10000000, parseInt(target.value || '100000')));
  }

  updateRateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.interestRate = Math.max(7, Math.min(15, parseFloat(target.value || '7')));
  }

  selectTax(tax: number) {
    this.selectedTaxSlab = tax;
  }

  calculateTax() {
    this.interestPaid = (this.loanAmount * this.interestRate) / 100;
    this.effectiveRate = this.interestRate * 0.8; // Example formula
    this.taxSavings = this.interestPaid * (this.selectedTaxSlab / 100);
  }

  resetCalculator() {
    this.loanAmount = 100000;
    this.interestRate = 7;
    this.interestPaid = 0;
    this.effectiveRate = 0;
    this.taxSavings = 0;
    this.selectedTaxSlab = 5;
  }
}
