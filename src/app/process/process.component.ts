import { Component, OnInit,OnDestroy,NgZone  }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-process',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent implements OnInit, OnDestroy {
  leftTextBlocks  = [
    { title: 'Research & Eligibility Check', description: 'Check loan eligibility criteria (age, academic background, admission status).' },
    { title: 'Choose the Right Loan & Lender', description: 'Compare interest rates, loan amounts, repayment terms, and processing fees.' },
    { title: 'Gather Required Documents', description: 'Common documents required: Admission letter, academic records (10th, 12th, and previous degrees), loan application form, proof of identity and residence (Aadhaar, PAN, passport, etc.), bank statements, and income proof of co-applicant/guarantor (ITR, salary slips).' }
    
  ];
  rightTextBlocks = [
    { title: 'Apply for the Loan', description: 'Fill out the loan application form online or offline at the chosen bank and submit necessary documents.' },
    { title: 'Loan Processing & Approval', description: 'The bank verifies your documents and evaluates your financial background. Loan sanction letter is issued after approval.' },
    { title: 'Loan Disbursement', description: 'Once you sign the loan agreement, the bank disburses the loan directly to the university (tuition fees) as and when required as per college fee requirements.' },
    { title: 'Collect Sanction Letter', description: 'Soon when the bank sanctions the student loan, the sanction letter  should be collected and submit at the VISA embassy.' }
  ];
  activeIndex: number = 0;
  intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.activeIndex = (this.activeIndex + 1) % 7;
        });
      }, 2000); // Switch text every 2 seconds
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up the interval
    }
  }
}

