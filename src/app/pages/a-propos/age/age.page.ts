import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit, AfterViewInit {


  public userFirstname: string = '';
  public isCompleted: boolean = false; 

  constructor(
    public userDataService: UserDataService,
    public navCtrl: NavController,

  ) { }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

  getUserAge(ageValue): void {
    this.userDataService.setUserAge((ageValue as HTMLInputElement).value);
    this.isCompleted = true;
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'ville']);
}
}
