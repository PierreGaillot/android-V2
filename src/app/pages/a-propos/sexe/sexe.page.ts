import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-sexe',
  templateUrl: './sexe.page.html',
  styleUrls: ['./sexe.page.scss'],
})


export class SexePage implements OnInit, AfterViewInit {
  
private userFirstname: string  = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

  getUserSexe(sexe) {
    this.userDataService.setUserSexe(sexe);
  }

}
