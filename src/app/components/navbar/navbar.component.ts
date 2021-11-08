import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  
  private title: string = "";
  private href: string = "";
  private routes: string[] = [
    "/home", "/firstname", "/age", "/sexe", "/ville", "/quartier", "/recap-a-propos" 
  ];
  private isHome: boolean = false;

  constructor(
    private router: Router,
    public navigation: NavigationService
  ) { }

  getCurrentRoute(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.href = event.urlAfterRedirects;
        // console.log(`Comp NAVBAR : ${this.href}`);

        // Change navbar title depending on the page 
        const index: number = this.routes.indexOf(this.href);
        // console.log(`INDEX : ${index}`);

        if (index === 0) {
          this.title = "introduction";
        } 
        else if (index > 0 && index <= 2) {
          this.title = "à propos de vous";
        }
        else {
          this.title = "test";
        }

        // Center navbar title on page with no return btn
        if (this.href === "/home") {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    })
  }

  ngOnInit() {
    this.getCurrentRoute();
  }

}
