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
  private route: string = "";
  private isHome: boolean = false;

  constructor(
    private router: Router,
    public navigation: NavigationService
  ) { }

  changeTitle(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route = event.urlAfterRedirects;
        // console.log(`Comp NAVBAR : ${this.route}`);

        // Change navbar title depending on the page 
        const index: number = this.navigation.routes.indexOf(this.route);
        // console.log(`INDEX : ${index}`);
        // console.log(this.navigation.getRoutes());

        if (index === 0) {
          this.title = "introduction";
        } 
        else if (index > 0 && index < 7) {
          this.title = "à propos de vous";
        }
        else if (index > 7 && index < 12) {
          this.title = "accompagnement";
        }
        else if (index > 12 && index < 15) {
          this.title = "contact";
        }
        else if (index === 7 || index === 12 || index === 15) {
          this.title = "récapitulatif"
        }
        else {
          this.title = "A bientôt";
        }

        // Center navbar title on page with no return btn
        if (this.route === "/home") {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    })
  }

  ngOnInit() {
    this.changeTitle();
    this.navigation.getRoutes();
  }

}
