import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-step3',
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  testScores = [
    { name: 'GRE', selected: 'Not Applicable', score: '' },
    { name: 'GMAT', selected: 'Not Applicable', score: '' },
    { name: 'Duolingo', selected: 'Not Applicable', score: '' },
    { name: 'IELTS', selected: 'Not Applicable', score: '' },
    { name: 'TOEFL', selected: 'Not Applicable', score: '' }
  ];

   selectNone() {
    this.testScores.forEach(test => test.selected = 'Not Applicable');
  }
}
