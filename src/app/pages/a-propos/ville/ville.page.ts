import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.page.html',
  styleUrls: ['./ville.page.scss'],
})
export class VillePage implements OnInit {

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
  }

  getUserCity(city) {
    this.userDataService.setUserCity(city);
  }

}
