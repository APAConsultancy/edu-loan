import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive]
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

}
