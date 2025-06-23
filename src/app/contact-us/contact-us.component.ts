import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanJourneyService } from '../loan-journey/loan-journey.service';

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
    email: '',
    subject: '',
    message: ''
  };
onSubmit() {
  // if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.subject || !this.form.message) {
  //   alert('All fields are required');
  //   return;
   
  // }
  // if (!this.validateEmail(this.form.email)) {
  //   alert('Invalid email format');
  //   return;
  // }
  const data= {
    FirstName: this.form.firstName,
    LastName: this.form.lastName,
    Email: this.form.email,
    Subject: this.form.subject, 
    Message: this.form.message
  };
  debugger
  this.loanJourneyService.sendContactUsEmail(data)
    .subscribe((response) => {
      console.log(response);
    },
    (error) => { 
      console.log(error);
    });
}
validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
}
