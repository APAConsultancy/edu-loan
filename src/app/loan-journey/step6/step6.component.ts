import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step6',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './step6.component.html',
  styleUrl: './step6.component.css'
})
export class Step6Component implements OnInit {

  programForm: FormGroup;
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

  courseDurations: number[] = [9, 12, 18, 24, 36, 48, 60];

  selectedDegree: string = '';
  selectedProgramName: string = '';
  selectedDuration: string = '';
  
  submitted = false;

  constructor(private router: Router,
    private fb: FormBuilder
  ) {
    this.programForm = this.fb.group({
      degree: ['', Validators.required],
      programName: ['', Validators.required],
      courseDuration: ['', Validators.required]
});
   }

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

  onSubmit() {
    if (this.programForm.valid) {
      console.log(this.programForm.value);
    } else {
      this.submitted = true;
    }
  }
}