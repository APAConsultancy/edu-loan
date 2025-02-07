import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step6',
  imports: [FormsModule, CommonModule],
  templateUrl: './step6.component.html',
  styleUrl: './step6.component.css'
})
export class Step6Component implements OnInit {
  degrees: string[] = [
    'UG',
    'PG',
    'Certificate Program',
    'Other'
  ];

  programNames: string[] = [
    'STEM',
    'Non STEM',
    'Management',
    'Other'
  ];

  courseDurations: number[] = [12, 24, 36];

  selectedDegree: string = 'UG';
  selectedProgramName: string = 'STEM';
  selectedDuration: string = '12';

  constructor(private router: Router) { }

  ngOnInit() {
    // Optional: You can set default values or perform any initialization here
    console.log('Degrees:', this.degrees);
    console.log('Program Names:', this.programNames);
    console.log('Course Durations:', this.courseDurations);
  }

  // Optional: Add methods to log selections
  onDegreeChange() {
    console.log('Selected Degree:', this.selectedDegree);
  }

  onProgramNameChange() {
    console.log('Selected Program Name:', this.selectedProgramName);
  }

  onDurationChange() {
    console.log('Selected Duration:', this.selectedDuration);
  }

  nextStep() {
    this.router.navigate(['/step7']);
  }

  previousStep() {
    this.router.navigate(['/step5']);
  }
}