import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  imports: [],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component  implements OnInit {
  public stepOneForm: FormGroup;

  constructor(private fb: FormBuilder


  ) {
    this.stepOneForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  stepOneSubmit() {
  }
}
