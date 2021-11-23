import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit, AfterViewInit {


  private userFirstname: string = '';
  private isCompleted: boolean = false; 

  constructor(
    public userDataService: UserDataService
  ) { }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

  getUserAge(ageValue): void {
    this.userDataService.setUserAge(ageValue);
    this.isCompleted = true;
  }

}
