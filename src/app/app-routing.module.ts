import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  MatDialogModule],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
