import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive,FormsModule, CommonModule]
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Call initializeSlick once the view is initialized
    this.initializeSlick();
    //this.initializeCountdown();
  }

  initializeSlick() {
    // Check if the code is running in the browser environment
    if (typeof window !== 'undefined') {
      const $ = (window as any).$;

      // Initialize slick sliders
      if ($(".brands-slider").length) {
        $(".brands-slider").slick({
          slidesToShow: 6,
          arrows: false,
          dots: false,
          infinite: true,
          cssEase: "linear",
          autoplay: true,
          autoplaySpeed: 0,
          speed: 6000,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            { breakpoint: 1599, settings: { slidesToShow: 5 } },
            { breakpoint: 1399, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 492, settings: { slidesToShow: 1 } }
          ]
        });
      }

      // Add other sliders similarly
      if ($(".courses-slider").length) {
        $(".courses-slider").slick({
          slidesToShow: 3,
          slideToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            { breakpoint: 1799, settings: { slidesToShow: 2 } },
            { breakpoint: 992, settings: { slidesToShow: 1 } }
          ]
        });
      }

      if ($(".team-slider").length) {
        $(".team-slider").slick({
          slidesToShow: 3,
          arrows: false,
          dots: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 3000
        });
      }
      if ($(".testimonials_slider").length) {
        $(".testimonials_slider").slick({
          slidesToShow: 1,
          slideToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".testimonials_slider_2").length) {
        $(".testimonials_slider_2").slick({
          slidesToShow: 2,
          slideToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: "15%",
          variableWidth: true,
          responsive: [
            {
              breakpoint: 452,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "0%",
                variableWidth: true,
              },
            },
          ],
        });
      }
    }
  }

  initializeCountdown() {
    // Check if the code is running in the browser environment
    if (typeof window !== 'undefined') {
      const $ = (window as any).$;

      // Initialize countdown
      if (typeof (window as any).Init !== 'undefined' && typeof (window as any).Init.countdownInit === 'function') {
        (window as any).Init.countdownInit(".countdown", "2025/12/01");
      }
    }
  }

  loanAmount: number = 100000;
  interestRate: number = 7;
  interestPaid: number = 0;
  effectiveRate: number = 0;
  taxSavings: number = 0;
  selectedTaxSlab: number = 5;

  updateLoanValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.loanAmount = Math.max(100000, Math.min(10000000, parseInt(target.value || '100000')));
  }

  updateRateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.interestRate = Math.max(7, Math.min(15, parseFloat(target.value || '7')));
  }

  selectTax(tax: number) {
    this.selectedTaxSlab = tax;
  }

  calculateTax() {
    this.interestPaid = (this.loanAmount * this.interestRate) / 100;
    this.effectiveRate = this.interestRate * 0.8; // Example formula
    this.taxSavings = this.interestPaid * (this.selectedTaxSlab / 100);
  }

  resetCalculator() {
    this.loanAmount = 100000;
    this.interestRate = 7;
    this.interestPaid = 0;
    this.effectiveRate = 0;
    this.taxSavings = 0;
    this.selectedTaxSlab = 5;
  }

}

