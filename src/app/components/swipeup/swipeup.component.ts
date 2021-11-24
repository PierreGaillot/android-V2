import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-swipeup',
  templateUrl: './swipeup.component.html',
  styleUrls: ['./swipeup.component.scss'],
})
export class SwipeupComponent implements OnInit {

  @Input() nextPage: string = '';

  constructor(public navigation: NavigationService) { }

  getRoutes(): string[] {
    this.navigation.getRoutes();
    return this.navigation.routes;
  }

  ngOnInit() {
  }
}
