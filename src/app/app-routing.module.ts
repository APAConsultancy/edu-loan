import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [RouterModule.forRoot(routes), 
     MatDialogModule,
     BrowserModule,
     BrowserAnimationsModule, // Required for Angular Material
     MatCardModule,      // Add MatCardModule here
     MatSliderModule,
     MatInputModule,
     MatButtonModule,
     FormsModule,
     MatRadioModule
        
    ],
    
  exports: [RouterModule],
  bootstrap: [AppComponent]  
})
export class AppRoutingModule { }
