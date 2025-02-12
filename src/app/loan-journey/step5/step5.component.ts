import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';

@Component({
  selector: 'app-step5',
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component implements OnInit {
  Universities: string[] = ['ABC','XYZ'];
  country = sessionStorage.getItem('selectedCountry');

  selectedUniversity: string = '';

  constructor(private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.selectedUniversity = this.sessionService.getItem('selectedUniversity') || '';
  }

  onUniversityChange() {
    // You can add additional logic here if needed
    console.log('Selected University:', this.selectedUniversity);
    this.sessionService.setItem('selectedUniversity', this.selectedUniversity);
  }

  nextStep() {
    this.router.navigate(['/step6']);
  }

  previousStep() {
    this.router.navigate(['/step4']);
  }
}
