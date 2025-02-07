import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class Step8Component implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  showWhatsappNumber = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      whatsappCheckbox: [false],
      whatsappNumber: [''],
      pinCode: ['', Validators.required],
      cityName: ['', Validators.required],
      familyIncome: ['', Validators.required],
      coApplicantPinCode: ['', Validators.required],
      coApplicantMobile: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactForm.get('whatsappCheckbox')?.valueChanges.subscribe(checked => {
      if (checked) {
        this.contactForm.get('whatsappNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{10}$/)]);
      } else {
        this.contactForm.get('whatsappNumber')?.clearValidators();
      }
      this.contactForm.get('whatsappNumber')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.submitted = true;
    }
  }

  nextStep() {
    this.router.navigate(['/step9']);
  }

  previousStep() {
    this.router.navigate(['/step7']);
  }
}