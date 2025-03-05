import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  activeSubMenu: string = '';
  isResourcesMenuOpen = false;

  toggleSubMenu(subMenu: string) {
    this.activeSubMenu = this.activeSubMenu === subMenu ? '' : subMenu;
  }

    setActiveSubMenu(subMenu: string) {
    this.activeSubMenu = subMenu;
  }

  toggleMobileNav() {}

  ngAfterViewInit(): void {
    // Call searchToggle once the view is initialized
    this.searchToggle();
  }


  searchToggle() {
    if (typeof window !== 'undefined') {
        const $ = (window as any).$;
        if ($(".mobile-nav__toggler")) {
          // $(".mobile-nav__toggler").on("click", function (e: any) {
            // e.preventDefault();
            $(".mobile-nav__wrapper").toggleClass("expanded");
            $("body").toggleClass("locked");
          // });
        }
    }
  }

  toggleResourcesMenu() {
    this.isResourcesMenuOpen = !this.isResourcesMenuOpen;
  }
}
