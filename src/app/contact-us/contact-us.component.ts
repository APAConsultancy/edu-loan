import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanJourneyService } from '../loan-journey/loan-journey.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(private http: HttpClient,
    private loanJourneyService: LoanJourneyService,
  ) {}
  form = {
    firstName: '',
    lastName: '',
    mobile: '',
    subject: '',
    message: ''
  };
onSubmit() {
  if (!this.form.firstName || !this.form.lastName || !this.form.mobile || !this.form.subject) {
    alert('All fields are required');
    return;
   
  }
  if (!this.validateMobile(this.form.mobile)) {
    alert('Please enter a valid mobile');
    return;
  }
  
  const data= {
    FirstName: this.form.firstName,
    LastName: this.form.lastName,
    Email: this.form.mobile,
    Subject: this.form.subject +"Message: - "+ this.form.message, 
    Message: ""
  };
  debugger
  this.loanJourneyService.sendContactUsEmail(data)
    .subscribe((response) => {
      console.log(response);
      
      
    },
    (error) => { 
      console.log(error);
    });
    this.clearForm();
    Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting us. We will get back to you shortly.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
}
validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

validateMobile(mobile: string): boolean {
  const mobileRegex = /^[6-9]\d{9}$/;  // Valid for India (10 digits, starts with 6–9)
  return mobileRegex.test(mobile);
}
allowOnlyNumbers(event: KeyboardEvent) {
  const charCode = event.which ? event.which : event.keyCode;
  // Allow only digits (0-9)
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}
clearForm()
{
this.form.firstName="";
 this.form.lastName="";
this.form.mobile="";
 this.form.subject ="";
 this.form.message ="";
}
}
