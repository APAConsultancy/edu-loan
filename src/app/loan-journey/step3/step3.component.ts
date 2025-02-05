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
    { name: 'GRE', selected: '', score: '' },
    { name: 'GMAT', selected: '', score: '' },
    { name: 'Duolingo', selected: '', score: '' },
    { name: 'IELTS', selected: '', score: '' },
    { name: 'TOEFL', selected: '', score: '' },
    { name: 'PTE', selected: '', score: '' }
  ];
}
