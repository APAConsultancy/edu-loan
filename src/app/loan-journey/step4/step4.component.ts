import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-step4',
  imports: [FormsModule, CommonModule, ProgressBarComponent],
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css',
  providers: [SessionService]
})
export class Step4Component {

  selectedAdmissionStatus='';
  isTransitioning = false;
  admissionStatuses = [
    'Confirmed',
    'Applied',
    'Not Applied'
  ];

    constructor(
      private fb: FormBuilder,
      private router: Router,
      private sessionService: SessionService,
      private transitionService: TransitionService
    ) { 
      this.transitionService.isTransitioning$.subscribe(
      (status) => (this.isTransitioning = status)
    ); 
  }
  
    ngOnInit(): void {
      if (this.sessionService) {
        const selectedAdmissionStatus = this.sessionService.getItem('selectedAdmissionStatus');
        if (selectedAdmissionStatus) {
          this.selectedAdmissionStatus = selectedAdmissionStatus;
        }
      }
    }

    nextStep() {
      this.transitionService.startTransition();
    setTimeout(() => {
      this.router.navigate(['/step5']);
    }, 2000);
    }
  
    previousStep() {
      this.router.navigate(['/step3']);
    }

    selectStatus(status: any) {
      this.transitionService.startTransition();
      setTimeout(() => {
      this.selectedAdmissionStatus = status;
      this.sessionService.setItem('selectedAdmissionStatus', this.selectedAdmissionStatus);
      this.router.navigate(['/step5']);
    }, 2000);
    }
  
}
