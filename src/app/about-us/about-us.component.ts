import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class AboutUsComponent  implements AfterViewInit {

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

