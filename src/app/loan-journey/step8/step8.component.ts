import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import { LoanJourneyService } from '../loan-journey.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
  imports: [ReactiveFormsModule, CommonModule, ProgressBarComponent]
})
export class Step8Component implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  showWhatsappNumber = false;
  contactFormDetail: any;
  pinCodeValue: string = '';

  constructor(private fb: FormBuilder, private router: Router,
    private sessionService: SessionService,
    private loanJourneyService: LoanJourneyService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      whatsappCheckbox: [false],
      whatsappNumber: [''],
      pinCode: ['', Validators.required],
      cityName: ['', Validators.required],
      familyIncome: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.sessionService.getItem('mobile'));
    this.contactForm.patchValue({
      mobile: this.sessionService.getItem('mobile')
    })
    const contactDetails = this.sessionService.getItem('contactDetails');
    this.contactFormDetail = contactDetails ? JSON.parse(contactDetails) : null;
    this.contactForm.get('whatsappCheckbox')?.valueChanges.subscribe(checked => {
      if (checked) {
        this.contactForm.get('whatsappNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{10}$/)]);
      } else {
        this.contactForm.get('whatsappNumber')?.clearValidators();
      }
      this.contactForm.get('whatsappNumber')?.updateValueAndValidity();
    });

    this.contactForm.get('pinCode')!.valueChanges.subscribe(value => {
      this.pinCodeValue = value;
      if (this.pinCodeValue) {
        this.loanJourneyService.getCityName(this.pinCodeValue).subscribe((response) => {
          console.log(response);
          this.contactForm.patchValue({
            cityName: response.District // Assuming the response has a property called cityName
          });
          this.contactForm.get('cityName')?.disable(); // Disable the cityName field
        },
        (error) => { 
          console.log(error);
          this.contactForm.get('cityName')?.enable(); // Enable the cityName field if the API call fails
        });
      } else {
        this.contactForm.get('cityName')?.enable(); // Enable the cityName field if the pin code is cleared
      }
    });

    
  }

  onSubmit() {
    
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sessionService.setItem('contactDetails', JSON.stringify(this.contactForm.value));
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

  submitCustomerDetails() {
    const questionnaireDetails = this.sessionService.getItem('questionnaireDetails');
    const questionnaireFormDetails = questionnaireDetails ? JSON.parse(questionnaireDetails) : null;
    const selectedAdmissionStatus = this.sessionService.getItem('selectedAdmissionStatus');
    const selectedCountry = this.sessionService.getItem('selectedCountry');
    const selectedUniversity = this.sessionService.getItem('selectedUniversity') || '';
    const programDetails = this.sessionService.getItem('programDetails');
    const programValue = programDetails ? JSON.parse(programDetails) : null;
    
    const data= {
      PhoneNumber: this.contactForm.get('mobile')?.value,
      Name: this.contactForm.get('name')?.value,
      AdditionPhoneNumber: this.contactForm.get('coApplicantMobile')?.value,
      Email: this.contactForm.get('email')?.value,
      PermanentCity: this.contactForm.get('cityName')?.value,
      PinCode: this.contactForm.get('pinCode')?.value,
      City: this.contactForm.get('cityName')?.value,
      State: "",
      TargetIntake: questionnaireFormDetails.intake,
      CourseStartMonth: questionnaireFormDetails.startMonth,
      Gender: this.contactForm.get('gender')?.value,
      AdmissionStatus: selectedAdmissionStatus,
      Country: selectedCountry,
      UniversityName: selectedUniversity,
      Degree: programValue.degree,
      ProgramName: programValue.programName,
      CourseDurationInMonths: programValue.courseDuration,
      Intake: questionnaireFormDetails.intake,
      StartingYear: questionnaireFormDetails?.startYear,
      StartingMonth:questionnaireFormDetails.startMonth,
      LoanAmount: questionnaireFormDetails.loanAmount,
      LoanType: questionnaireFormDetails.loanType,
      CoApplicantPhoneNumber: this.contactForm.get('coApplicantMobile')?.value,
      WhatsAppPhoneNumber: this.contactForm.get('whatsappNumber')?.value,
      ApproxFamilyIncome: this.contactForm.get('familyIncome')?.value,
      AppliedOtherBank: questionnaireFormDetails?.appliedOtherBank,
    };
    this.loanJourneyService.saveCustomerDetails(data)
    .subscribe((response) => {
      console.log(response);
    },
    (error) => { 
      console.log(error);
    });
  }
}