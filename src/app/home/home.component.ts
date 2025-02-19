import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule
  ],
})
export class HomeComponent implements  OnInit {
  textBlocks: string[] = [
    'First text section',
    'Second text section',
    'Third text section',
    'Fourth text section'
  ];

  activeIndex = 0;

  ngOnInit() {
    this.startAutoSwitch();
  }

  startAutoSwitch() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.textBlocks.length;
    }, 2000); // Switch every 2 seconds
  }
}


