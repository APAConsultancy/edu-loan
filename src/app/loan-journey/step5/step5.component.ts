import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step5',
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component {
  Universities = ['ABC','XYZ'];
  country = sessionStorage.getItem('selectedCountry');
}
