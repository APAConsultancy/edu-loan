import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import Chart from 'chart.js/auto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-emicalcpopup',
  imports: [FormsModule,CommonModule],
  templateUrl: './emicalcpopup.component.html',
  styleUrl: './emicalcpopup.component.css'
})
export class EmicalcpopupComponent implements OnInit{
 
  loanAmount = 2000000;
  courseDuration = 24;
  loanTenure = 7;
  interestRate = 11;
  gracePeriod = 6;

  emi = 0;
  totalInterest = 0;
  totalPayment = 0;
  chart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.calculateEMI();
    if(window !== undefined){
      window.scrollTo(0, 0); // Ensure the page scrolls to top on load
      }
  }

  calculateEMI() {
    const principal = this.loanAmount;
    const rate = this.interestRate / 100 / 12;
    const n = this.loanTenure * 12;
    this.emi = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    this.totalPayment = this.emi * n;
    this.totalInterest = this.totalPayment - principal;

    this.updateChart();
  }

  updateChart() {
    if (isPlatformBrowser(this.platformId)) { // ✅ Ensures this runs only in browser
      const ctx = document.getElementById('emiChart') as HTMLCanvasElement;
      if (ctx) {
        if (this.chart) this.chart.destroy();
        this.chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Total Interest', 'Total Repayment'],
            datasets: [{
              data: [this.totalInterest, this.totalPayment],
              backgroundColor: ['#2027ba', '#17a3d1'],
            }]
          }
        });
      }
    }
  }
}
