import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-quartier',
  templateUrl: './quartier.page.html',
  styleUrls: ['./quartier.page.scss'],
})
export class QuartierPage implements OnInit, AfterViewInit {

  public area: string = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
  }

  getUserArea(event) {
    if (event.key === "Enter") return this.userDataService.setUserArea(this.area);
  }

}
