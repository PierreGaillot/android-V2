import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {
  
  constructor(
    public userDataService: UserDataService
  ) { }

  getUserData() {
    this.userDataService.getUserData();
    console.log(this.userDataService.user);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.getUserData();
  }

}
