import { Component } from '@angular/core';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { Step9Component } from './step9/step9.component';
import {NgStepperModule} from 'angular-ng-stepper';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loan-journey',
  imports: [CdkStepperModule,
    NgStepperModule,RouterOutlet, RouterLink, RouterLinkActive,
    Step1Component, Step2Component, Step3Component, Step4Component,
    Step5Component, Step6Component, Step7Component, Step8Component, Step9Component
  ],
  templateUrl: './loan-journey.component.html',
  styleUrl: './loan-journey.component.css'
})
export class LoanJourneyComponent {

}
