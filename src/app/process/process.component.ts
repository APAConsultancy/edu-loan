import { Component, OnInit,OnDestroy,NgZone, ChangeDetectorRef  }  from '@angular/core';
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
    { title: 'Gather Required Documents', description: 'All the common documents required like admission letter, academic records, loan application form, etc. should be gathered..' },
    { title: 'Apply for the Loan', description: 'Fill out the loan application form online or offline at the chosen bank and submit necessary documents.' }
    
  ];
  rightTextBlocks = [
    
    { title: 'Loan Processing', description: 'The bank verifies your documents and evaluates your financial background, also bank will do physical verifications.' },
    { title: 'Final Approval', description: 'After getting the approval pay your processing fee and the loan sanction letter will be issued by the Bank.' },
    { title: 'Collect Sanction Letter', description: 'When the bank sanctions the student loan, the sanction letter should be collected and submitted at the VISA embassy.' },
    { title: 'Loan Disbursement', description: 'Once you sign the loan agreement, the bank disburses the loan directly to the university as per college fee requirements.' }
    
  ];
  activeIndex: number = 0;
  intervalId: any;

  constructor(private ngZone: NgZone,private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.activeIndex = (this.activeIndex + 1) % 8;
          this.cd.detectChanges(); 
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

