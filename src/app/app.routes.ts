import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanJourneyComponent } from './loan-journey/loan-journey.component';
import { Step1Component } from './loan-journey/step1/step1.component';
import { Step2Component } from './loan-journey/step2/step2.component';
import { Step3Component } from './loan-journey/step3/step3.component';
import { Step4Component } from './loan-journey/step4/step4.component';
import { Step5Component } from './loan-journey/step5/step5.component';
import { Step6Component } from './loan-journey/step6/step6.component';
import { Step7Component } from './loan-journey/step7/step7.component';
import { Step8Component } from './loan-journey/step8/step8.component';
import { Step9Component } from './loan-journey/step9/step9.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import {CommunityComponent} from './community/community.component';
import {FaqComponent} from './faq/faq.component';
import {ProcessComponent} from './process/process.component';
import {BlogsComponent} from './blogs/blogs.component';
import {TaxsavingcalcpopupComponent} from './taxsavingcalcpopup/taxsavingcalcpopup.component';
import { EmicalcpopupComponent } from './emicalcpopup/emicalcpopup.component';
import{ LoanamountcalcpopupComponent} from './loanamountcalcpopup/loanamountcalcpopup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'loan-journey', component: LoanJourneyComponent},
    {path: 'step1', component: Step1Component},
    {path: 'step2', component: Step2Component},
    {path: 'step3', component: Step3Component},
    {path: 'step4', component: Step4Component},
    {path: 'step5', component: Step5Component},
    {path: 'step6', component: Step6Component},
    {path: 'step7', component: Step7Component},
    {path: 'step8', component: Step8Component},
    {path: 'step9', component: Step9Component},
    {path:'about-us', component:AboutUsComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'community', component:CommunityComponent},
    {path:'faq', component:FaqComponent},
    {path:'process', component:ProcessComponent},
    {path:'blogs', component:BlogsComponent},
    {path:'taxcalc', component:TaxsavingcalcpopupComponent},
    {path:'emicalc', component:EmicalcpopupComponent},
    {path:'loanamountcalc', component:LoanamountcalcpopupComponent}

];
