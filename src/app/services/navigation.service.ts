import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  public route: string = "";

  constructor(
    private router: Router,
    private location: Location
  ) { }

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
        this.route = event.urlAfterRedirects;
        // console.log(this.route);
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

}
