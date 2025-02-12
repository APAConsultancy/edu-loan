import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() currentStep!: number;
  totalSteps: number = 8; // Total steps from step 2 to step 9

  getProgressWidth(): string {
    return `${(this.currentStep / this.totalSteps) * 100}%`;
  }
}