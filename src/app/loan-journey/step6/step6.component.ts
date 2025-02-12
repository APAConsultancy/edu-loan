import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';

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
  programValue: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private sessionService: SessionService
  ) {
    this.programForm = this.fb.group({
      degree: ['', Validators.required],
      programName: ['', Validators.required],
      courseDuration: ['', Validators.required]
});
   }

  ngOnInit() {
    if (this.sessionService) {
    const programDetails = this.sessionService.getItem('programDetails');
    this.programValue = programDetails ? JSON.parse(programDetails) : this.programValue;
    this.selectedDegree = this.programValue?.degree;
    this.selectedProgramName = this.programValue?.programName;
    this.selectedDuration = this.programValue?.courseDuration;
    this.programForm.patchValue({
      degree: this.programValue.degree?this.programValue.degree:'',
      programName: this.programValue.programName?this.programValue.programName:'',
      courseDuration: this.programValue.courseDuration?this.programValue.courseDuration:'',
    });
    }
  }


  // Optional: Add methods to log selections
  onDegreeChange() {
    this.selectedDegree =   this.programForm?.get('degree')?.value;
    console.log('Selected Degree:', this.selectedDegree);
  }

  onProgramNameChange() {
    this.selectedProgramName = this.programForm?.get('programName')?.value;
    console.log('Selected Program Name:', this.selectedProgramName);
  }

  onDurationChange() {
    this.selectedDuration = this.programForm?.get('courseDuration')?.value;
    console.log('Selected Duration:', this.selectedDuration);
  }

  nextStep() {
    this.sessionService.setItem('programDetails', JSON.stringify(this.programForm.value));
    this.router.navigate(['/step7']);
  }

  previousStep() {
    this.router.navigate(['/step5']);
  }

  onSubmit() {
    if (this.programForm.valid) {
      console.log(this.programForm.value);
      this.sessionService.setItem('programDetails', JSON.stringify(this.programForm.value));
      this.router.navigate(['/step7']);
    } else {
      this.submitted = true;
    }
  }
}