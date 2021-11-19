import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  history: string[] = [];
  routes: string[] = [
    "/home", "/firstname", "/sexe", "/age", "/ville", "/quartier", "/recap-a-propos", "/details-a-propos",
    "/motif", "/methode", "/rythme", "/recap-accompagnement", "/detail-accompagnement",
    "/contact", "/recap-total", "/detail-total",
    "/fin"
  ];

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  // Go back to previous page
  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    })
  }

  public goBack(): void {
    this.history.pop();

    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl("/")
    }
  }

  getRoutes(): string[] {
    return this.routes;
  }

}
