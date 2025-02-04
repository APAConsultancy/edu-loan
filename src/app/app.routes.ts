import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanJourneyComponent } from './loan-journey/loan-journey.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'loan-journey', component: LoanJourneyComponent}
];
