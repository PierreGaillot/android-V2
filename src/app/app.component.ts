import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public navigation: NavigationService,
    // private router: Router,
  ) {
    this.navigation.startSaveHistory();
  }
}