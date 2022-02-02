import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rythme',
  templateUrl: './rythme.page.html',
  styleUrls: ['./rythme.page.scss'],
})
export class RythmePage implements OnInit {
  public isCompleted: boolean = false; 
  public contactFrequency: string = '';
  public disabledStatus: boolean = true;

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  getUserContactFrequency(userContactFrequency) {
    this.disabledStatus = true;
    this.userDataService.setUserContactFrequency((userContactFrequency as HTMLInputElement).value);
    this.isCompleted = true
  }

  toggleTextInput() {
    if (this.disabledStatus == true) return this.disabledStatus = false;
    return this.disabledStatus = true;
  }

  getTextContactFrequency(event) {
    if (event.key === "Enter") return this.userDataService.setUserContactFrequency(this.contactFrequency);
    this.isCompleted = true;
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'recap-accompagnement']);
}

}
