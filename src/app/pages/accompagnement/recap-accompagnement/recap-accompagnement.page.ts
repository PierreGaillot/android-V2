import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recap-accompagnement',

  templateUrl: './recap-accompagnement.page.html',
  styleUrls: ['./recap-accompagnement.page.scss'],
})
export class RecapAccompagnementPage implements OnInit {

  public userFirstname: string = '';
  public isCompleted: boolean = false;

  constructor(
    public userDataService: UserDataService,
    public navCtrl: NavController,

  ) {}

  ngOnInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
    this.showSwipeDelay();
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'contact']);
  }

  showSwipeDelay() {
    setTimeout(() => {
      this.isCompleted = true;
    }, 2000);
  }

}
