import { CommonModule } from '@angular/common';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import { LoanJourneyService } from '../loan-journey.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { Transition10Service } from '../../services/transition10.service';
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
  imports: [ReactiveFormsModule, CommonModule, ProgressBarComponent]
})
export class Step8Component implements OnInit {
  @ViewChild('emailInput') emailInput: ElementRef | undefined;
  @ViewChild('whatsappNumberInput') whatsappNumberInput: ElementRef | undefined;
  
  contactForm: FormGroup;
  submitted = false;
  showWhatsappNumber = false;
  contactFormDetail: any;
  pinCodeValue: string = '';
  selectedName: string = '';
  selectedEmail: string = '';
  selectedMobile:   string = '';
  selectedWhatsappCheckbox: boolean = false;
  selectedWhatsappNumber: string = '';
  selectedPinCode: string = '';
  selectedCityName: string = '';
  selectedFamilyIncome: string = '';
  selectedGender: string = '';
  selectedCoApplicantMobile: string = '';
  isTransitioning = false;

  constructor(private fb: FormBuilder, private router: Router,
    private sessionService: SessionService,
    private loanJourneyService: LoanJourneyService,
    private transitionService: Transition10Service
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
      gender: ['', Validators.required],
      coApplicantMobile: ['']
    });
    this.transitionService.isTransitioning$.subscribe(
      (status) => (this.isTransitioning = status)
    ); 
  }

  ngOnInit(): void {
    if (this.sessionService) {
      const mobile = this.sessionService.getItem('mobile');
      if (mobile) {
        this.contactForm.patchValue({
          mobile: mobile
        });
      }
      const contactDetails = this.sessionService.getItem('contactDetails');
      this.contactFormDetail = contactDetails ? JSON.parse(contactDetails) : this.contactFormDetail;
      this.selectedName = this.contactFormDetail?.name ? this.contactFormDetail?.name : '';
      this.selectedEmail = this.contactFormDetail?.email ? this.contactFormDetail?.email : '';
      this.selectedMobile = this.contactFormDetail?.mobile ? this.contactFormDetail?.mobile : '';
      this.selectedWhatsappCheckbox = this.contactFormDetail?.whatsappCheckbox ? this.contactFormDetail?.whatsappCheckbox : false;
      this.selectedWhatsappNumber = this.contactFormDetail?.whatsappNumber ? this.contactFormDetail?.whatsappNumber : '';
      this.selectedPinCode = this.contactFormDetail?.pinCode ? this.contactFormDetail?.pinCode : '';
      this.selectedCityName = this.contactFormDetail?.cityName ? this.contactFormDetail?.cityName : '';
      this.selectedFamilyIncome = this.contactFormDetail?.familyIncome ? this.contactFormDetail?.familyIncome : '';
      this.selectedGender = this.contactFormDetail?.gender ? this.contactFormDetail?.gender : '';
      this.selectedCoApplicantMobile = this.contactFormDetail?.coApplicantMobile ? this.contactFormDetail?.coApplicantMobile : '';
    }
    
    this.contactForm.patchValue({
      name: this.contactFormDetail?.name,
      email: this.contactFormDetail?.email,
      //mobile: this.contactFormDetail?.mobile,
      whatsappCheckbox: this.contactFormDetail?.whatsappCheckbox,
      whatsappNumber: this.contactFormDetail?.whatsappNumber,
      pinCode: this.contactFormDetail?.pinCode,
      cityName: this.contactFormDetail?.cityName,
      familyIncome: this.contactFormDetail?.familyIncome,
      gender: this.contactFormDetail?.gender,
      coApplicantMobile: this.contactFormDetail?.coApplicantMobile
    })
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
      if (this.pinCodeValue && this.pinCodeValue.length === 6) {
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
    this.submitted = true;
    if (this.contactForm.invalid) {
      if (this.contactForm.get('email')?.invalid) {
        this.emailInput?.nativeElement.focus(); // Focus the email input if it is invalid
      }
      if (this.contactForm.get('whatsappNumber')?.invalid) {
        this.whatsappNumberInput?.nativeElement.focus(); // Focus the email input if it is invalid
      }
      return;
    }
    
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sessionService.setItem('contactDetails', JSON.stringify(this.contactForm.value));
      this.selectedName = this.contactForm.value.name ? this.contactForm.value?.name : '';
      this.selectedEmail = this.contactForm.value.email ? this.contactForm.value?.email : '';
      this.selectedMobile = this.contactForm.value.mobile ? this.contactForm.value?.mobile : '';
      this.selectedWhatsappCheckbox = this.contactForm.value.whatsappCheckbox ? this.contactForm.value?.whatsappCheckbox : false;
      this.selectedWhatsappNumber = this.contactForm.value.whatsappNumber ? this.contactForm.value?.whatsappNumber : '';
      this.selectedPinCode = this.contactForm.value.pinCode ? this.contactForm.value?.pinCode : '';
      this.selectedCityName = this.contactForm.value.cityName ? this.contactForm.value?.cityName : '';
      this.selectedFamilyIncome = this.contactForm.value.familyIncome ? this.contactForm.value?.familyIncome : '';
      this.selectedGender = this.contactForm.value.gender ? this.contactForm.value?.gender : '';
      this.selectedCoApplicantMobile = this.contactForm.value.coApplicantMobile ? this.contactForm.value?.coApplicantMobile : '';
      this.submitCustomerDetails();
      //this.router.navigate(['/step9']);
      this.nextStep();
    } else {
      this.submitted = true;
    }
  }

  nextStep() {
    this.transitionService.startTransition();
    setTimeout(() => {
    this.router.navigate(['/step9']);
  }, 10000);
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