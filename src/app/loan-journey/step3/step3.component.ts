import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';


@Component({
  selector: 'app-step3',
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component implements OnInit {
  testScores = [
    { name: 'GRE', selected: 'Not Applicable', score: '' },
    { name: 'GMAT', selected: 'Not Applicable', score: '' },
    { name: 'Duolingo', selected: 'Not Applicable', score: '' },
    { name: 'IELTS', selected: 'Not Applicable', score: '' },
    { name: 'TOEFL', selected: 'Not Applicable', score: '' },
    { name: 'PEL', selected: 'Not Applicable', score: '' }
  ];

  constructor(private router: Router,
    private sessionService: SessionService
  ) { }
  
  ngOnInit(): void {
    const testScoresString = this.sessionService.getItem('testScores');
    this.testScores = testScoresString ? JSON.parse(testScoresString) : this.testScores;
  }

  selectNone() {
    this.testScores.forEach(test => test.selected = 'Not Applicable');
    this.router.navigate(['/step4']);
  }

  nextStep() {
    this.sessionService.setItem('testScores', JSON.stringify(this.testScores));
    this.router.navigate(['/step4']);
  }

  previousStep() {
    this.router.navigate(['/step2']);
  }
}
