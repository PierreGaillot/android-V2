import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  
  public title: string = "";
  // public href: string = "";

  constructor(
    public router: Router,
    public navigation: NavigationService
  ) { }

  ngOnInit() {
    // this.href = this.router.url;
    // console.log(this.href);
  }

}
