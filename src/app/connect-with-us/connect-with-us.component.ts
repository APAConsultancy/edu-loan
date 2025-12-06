import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-connect-with-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './connect-with-us.component.html',
  styleUrls: ['./connect-with-us.component.css']
})
export class ConnectWithUsComponent {
 contactForm: FormGroup;
minMonth: string = '';
maxMonth: string = '';
@ViewChild('realMonthInput') realMonthInput!: ElementRef;
displayMonth: string = '';
currentYear: number=new Date().getFullYear();

ngOnInit(): void {

  const today = new Date();
  // Minimum month = current month (YYYY-MM)
  this.minMonth = today.toISOString().slice(0, 7);
  // Maximum month = December next year
  const nextYear = today.getFullYear() + 1;
  this.maxMonth = `${nextYear}-12`;
}
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      loanAmount: ['', Validators.required],
      permanentCity: ['', Validators.required],
      countryOfStudy: ['', Validators.required],
      admissionStatus: ['', Validators.required],
      targetIntake: ['', Validators.required]
    });
  }

 allowOnlyNumbers(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'
  ];
  if (allowedKeys.includes(event.key)) {
    return; // allow navigation and editing keys
  }
  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();  // block anything except digits
  }
}
preventPasteNonNumeric(event: ClipboardEvent) {
  const pasteData = event.clipboardData?.getData('text') || '';
  if (!/^[0-9]*$/.test(pasteData)) {
    event.preventDefault();
  }
}
isInvalid(controlName: string) {
  const control = this.contactForm.get(controlName);
  return control?.touched && control?.invalid;
}

openNativePicker() {
  this.realMonthInput.nativeElement.showPicker(); // opens browser's month picker
}

updateMonthDisplay(event: any) {
  const value = event.target.value;  // format: YYYY-MM
  if (!value) return;

  const [year, month] = value.split('-');
  const date = new Date(Number(year), Number(month) - 1);

  this.displayMonth = date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}
  onSubmit(): void {
    console.log('submit hits');
    debugger
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.http.post('https://devapi.theunifund.com/api/connect/submit', this.contactForm.value)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for contacting us. Our team will get back to you shortly.',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          this.contactForm.reset({
          fullName: '',
          email: '',
          phoneNo: '',
          loanAmount: '',          // default dropdown value
          permanentCity: '',
          countryOfStudy: '',
          admissionStatus: '',     // default dropdown value
          targetIntake: ''
        });
        },
        error: (err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong. Please try again later.',
            icon: 'error'
          });
        }
      });
  }

}
