import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@Component({
  selector: 'app-step5',
  imports: [FormsModule,ReactiveFormsModule, CommonModule, AutocompleteLibModule],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component implements OnInit {
  UniversityName = 'UniversityName';
  Universities: { Id: number; UniversityName: string; }[] = [{"Id":12,"UniversityName":"Isenberg School of Management, University of Massachusetts-Amhe"},{"Id":13,"UniversityName":"Mendoza College of Business, University of Notre Dame"},{"Id":14,"UniversityName":"Robert H. Smith School of Business, University of Maryland, College"},{"Id":15,"UniversityName":"USC Marshall School of Business, University of Southern California"},{"Id":16,"UniversityName":"Arizona State University"},{"Id":17,"UniversityName":"Babson College"},{"Id":18,"UniversityName":"Boston College"},{"Id":19,"UniversityName":"Boston University"},{"Id":20,"UniversityName":"Brown University"},{"Id":21,"UniversityName":"California Institute of Technology"},{"Id":22,"UniversityName":"Carnegie Mellon University"},{"Id":23,"UniversityName":"Case Western Reserve University"},{"Id":24,"UniversityName":"Columbia Business School, Columbia University"},{"Id":25,"UniversityName":"Columbia University"},{"Id":26,"UniversityName":"Cornell University"},{"Id":27,"UniversityName":"D'Amore-McKim School of Business, Northeastern University"},{"Id":28,"UniversityName":"Dartmouth college"},{"Id":29,"UniversityName":"Duke Fuqua School of Business - Duke University"},{"Id":30,"UniversityName":"Duke University"},{"Id":31,"UniversityName":"Eli Broad College of Business, Michigan State University"},{"Id":32,"UniversityName":"Emory University"},{"Id":33,"UniversityName":"Foster School of Business, University of Washington"}];
  country = sessionStorage.getItem('selectedCountry');

  selectedUniversity: string = '';

  constructor(private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    if (this.sessionService) {
        this.selectedUniversity = this.sessionService.getItem('selectedUniversity') || '';
    }
  }

  onUniversityChange() {
    // You can add additional logic here if needed
    console.log('Selected University:', this.selectedUniversity);
    this.sessionService.setItem('selectedUniversity', this.selectedUniversity);
    this.router.navigate(['/step6']);
  }

  nextStep() {
    this.router.navigate(['/step6']);
  }

  previousStep() {
    this.router.navigate(['/step4']);
  }

  selectEvent(item: any) {
    console.log('Selected item:', item);
    this.router.navigate(['/step6']);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e : any){
    // do something when input is focused
  }
}
