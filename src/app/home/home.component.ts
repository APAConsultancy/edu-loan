import { Component, AfterViewInit, NgZone, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { JoincommunityComponent } from '../joincommunity/joincommunity.component';
import { TaxsavingcalcpopupComponent } from '../taxsavingcalcpopup/taxsavingcalcpopup.component';
import { ProcessComponent } from '../process/process.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: { ngSkipHydration: 'true' },
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule,ProcessComponent]
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   // Initialize both slick sliders and countdown timer
    //   this.ngZone.runOutsideAngular(() => {
    //     this.initializeSlick();
    //     this.initializeCountdown();
    //   });
    // }
    this.initializeSlick();
    this.initializeCountdown();
  }

  initializeSlick() {
    if (isPlatformBrowser(this.platformId)) {
      const $ = (window as any).$;

      if ($(".brands-slider").length) {
        this.renderer.listen('window', 'load', () => {
          $(".brands-slider").slick({
            slidesToShow: 12,
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
        });
      }

      if ($(".courses-slider").length) {
        this.renderer.listen('window', 'load', () => {
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
        });
      }

      if ($(".team-slider").length) {
        this.renderer.listen('window', 'load', () => {
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
        });
      }

      if ($(".testimonials_slider").length) {
        this.renderer.listen('window', 'load', () => {
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
        });
      }

      if ($(".testimonials_slider_2").length) {
        this.renderer.listen('window', 'load', () => {
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
        });
      }
    }
  }

  initializeCountdown() {
    if (isPlatformBrowser(this.platformId)) {
      const $ = (window as any).$;
      setTimeout(() => {
        if ($(".countdown").length) {
          $(".countdown").countdown("2025/08/01", (event: any) => {
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

  
  textBlocks = [
    { title: 'Loan Eligibility Checker', text: 'Find Out if You’re Loan-Ready in a Few Clicks!' },
    { title: 'EMI Calculator', text: 'No more guessing, No more stress,    Plan your finances and stay on track' },
    { title: 'Required Loan Amount', text: 'Enter your tuition fees, living expenses, and other costs, and there you go!' },
    { title: 'Tax Saving Calculator', text: 'Your education loan could help you save on taxes!' },
    // { title: 'Block 5', text: 'This is block 5' }
  ];

  activeIndex = 0;

  intervalId: any;
  ngOnInit(): void {
    this.activeIndex = (this.activeIndex + 1) % this.textBlocks.length;
    // this.ngZone.runOutsideAngular(() => {
    //   this.intervalId = setInterval(() => {
    //     this.ngZone.run(() => {
    //       this.activeIndex = (this.activeIndex + 1) % this.textBlocks.length;
    //     });
    //   }, 2000); // Switch text every 2 seconds
    // });
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up the interval
    }
  }

  goToTools(index: number): void {
    if (index === 0) {
      this.router.navigate(['/loan-journey']);
    } else if (index === 1) {
      this.router.navigate(['/emicalc']);
    }
    else if (index === 2) {
      this.router.navigate(['/loanamountcalc']);
    }
    else if (index === 3) {
      this.router.navigate(['/taxcalc']);
    }
  }
}