import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-sexe',
  templateUrl: './sexe.page.html',
  styleUrls: ['./sexe.page.scss'],
})
export class SexePage implements OnInit, AfterViewInit {

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
  }
}
