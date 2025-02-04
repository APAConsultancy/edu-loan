import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component  implements OnInit {
  public stepTwoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepTwoForm = this.fb.group({
      city: this.fb.control(''),
      country: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepTwoSubmit() {
  }
}
