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
    // Initialize both slick sliders and countdown timer
    this.initializeSlick();
    this.initializeCountdown();
  }

  initializeSlick() {
    if (typeof window !== 'undefined') {
      const $ = (window as any).$;

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
          slideToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 3000,
          variableWidth: true,
          variableHeight: true,
          responsive: [
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
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
              settings: { slidesToShow: 1 }
            }
          ]
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
                variableWidth: true
              }
            }
          ]
        });
      }
    }
  }

  initializeCountdown() {
    const $ = (window as any).$;
    setTimeout(() => {
      if ($(".countdown").length) {
        $(".countdown").countdown("2025/12/01", (event: any) => {
          const past = event.offset.seconds + 3;
          let remainHtml = "";
          for (let i = past; i > event.offset.seconds; i--) {
            remainHtml += `<li>${i < 10 ? "0" + i : i}</li>`;
          }
          $(".top-remain").html(remainHtml);
  
          const start = event.offset.seconds - 1;
          const max = event.offset.seconds - 3;
          let comingHtml = "";
          for (let bi = start; bi >= max; bi--) {
            comingHtml += `<li>${bi < 10 ? "0" + bi : bi}</li>`;
          }
          $(".top-coming").html(comingHtml);
  
          $(".countdown").html(
            event.strftime(
              `<li><h2>%D</h2><h6>Days</h6></li>
               <li><h2>%H</h2><h6>Hrs</h6></li>
               <li><h2>%M</h2><h6>Min</h6></li>
               <li><h2><span>%S</span></h2><h6>Sec</h6></li>`
            )
          );
        });
      }
    }, 100);
  }
  

}
