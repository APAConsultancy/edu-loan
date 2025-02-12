import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step4',
  imports: [FormsModule, CommonModule],
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css',
  providers: [SessionService]
})
export class Step4Component {

  selectedAdmissionStatus='';

  admissionStatuses = [
    'Confirmed',
    'Applied',
    'Not Applied'
  ];

    constructor(
      private fb: FormBuilder,
      private router: Router,
      private sessionService: SessionService
    ) {  }
  
    ngOnInit(): void {
      if (this.sessionService) {
        const selectedAdmissionStatus = this.sessionService.getItem('selectedAdmissionStatus');
        if (selectedAdmissionStatus) {
          this.selectedAdmissionStatus = selectedAdmissionStatus;
        }
      }
    }

    nextStep() {
      this.router.navigate(['/step5']);
    }
  
    previousStep() {
      this.router.navigate(['/step3']);
    }

    selectStatus(status: any) {
      this.selectedAdmissionStatus = status;
      this.sessionService.setItem('selectedAdmissionStatus', this.selectedAdmissionStatus);
      this.router.navigate(['/step5']);
    }
  
}
