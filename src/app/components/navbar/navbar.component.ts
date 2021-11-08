import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  @Input() title: string;

  public href: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href);
  }

}
