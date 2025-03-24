import { Component, OnInit, ElementRef, ViewChildren, QueryList  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-step3',
  imports: [CommonModule,ReactiveFormsModule, FormsModule, ProgressBarComponent],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component implements OnInit {
  @ViewChildren('scoreInput') scoreInputs: QueryList<ElementRef> | undefined;
  isTransitioning = false;
  testScores = [
    { name: 'GRE', selected: 'Not Applicable', score: '', touched: false },
    { name: 'GMAT', selected: 'Not Applicable', score: '', touched: false },
    { name: 'Duolingo', selected: 'Not Applicable', score: '', touched: false },
    { name: 'IELTS', selected: 'Not Applicable', score: '', touched: false },
    { name: 'TOEFL', selected: 'Not Applicable', score: '', touched: false },
    { name: 'PTE', selected: 'Not Applicable', score: '', touched: false }
  ];

  constructor(private router: Router,
    private sessionService: SessionService,
    private transitionService: TransitionService
  ) { 
    this.transitionService.isTransitioning$.subscribe(
      (status) => (this.isTransitioning = status)
    );
  }
  
  ngOnInit(): void {
    const testScoresString = this.sessionService.getItem('testScores');
    this.testScores = testScoresString ? JSON.parse(testScoresString) : this.testScores;
  }

  selectNone() {
    this.testScores.forEach(test => {
      test.selected = 'Not Applicable';
      test.score = '';
      test.touched = false;
    });
    this.nextStep();
  }

  nextStep() {
    this.transitionService.startTransition();
    setTimeout(() => {
    this.sessionService.setItem('testScores', JSON.stringify(this.testScores));
    if (this.isFormValid()){
      this.router.navigate(['/step4']);
    } else {
      this.markAllAsTouched();
    }
  }, 3500);
  }

  isFormValid(): boolean {
    return this.testScores.every(test => {
      if (test.selected === 'Taken') {
        return this.isValidScore(test.score);
      }
      return true;
    });
  }

  isValidScore(score: string): boolean {
    const DECIMAL_REGEX = /^\d{1,3}(\.\d{1,2})?$/;
    return DECIMAL_REGEX.test(score);
  }

  markAllAsTouched() {
    this.testScores.forEach((test, index) => {
      if (test.selected === 'Taken' && !this.isValidScore(test.score)) {
        test.touched = true;
        if (this.scoreInputs) {
          const scoreInput = this.scoreInputs.toArray()[index];
          if (scoreInput) {
            scoreInput.nativeElement.focus();
            scoreInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      } else {
        test.touched = false;
      }
    });
  }

  previousStep() {
    this.router.navigate(['/step2']);
  }
}
