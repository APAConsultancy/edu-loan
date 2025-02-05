import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanJourneyComponent } from './loan-journey/loan-journey.component';
import { Step1Component } from './loan-journey/step1/step1.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'loan-journey', component: LoanJourneyComponent},
    {path: 'step1', component: Step1Component},

];
