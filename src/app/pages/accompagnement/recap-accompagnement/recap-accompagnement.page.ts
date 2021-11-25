import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recap-accompagnement',

  templateUrl: './recap-accompagnement.page.html',
  styleUrls: ['./recap-accompagnement.page.scss'],
})
export class RecapAccompagnementPage implements OnInit {

  private userFirstname: string = '';

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,

  ) {
  }

  ngOnInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'contact']);
}

}
