import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  imports: [FormsModule],
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css'
})
export class Step4Component {

  admissionStatus='Applied';

    constructor(
      private fb: FormBuilder,
      private router: Router
    ) {  }
  
    ngOnInit(): void {
    }

    nextStep() {
      this.router.navigate(['/step5']);
    }
  
    previousStep() {
      this.router.navigate(['/step3']);
    }
  
}
