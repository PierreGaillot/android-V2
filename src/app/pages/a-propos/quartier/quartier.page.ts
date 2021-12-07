import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

import { NavController } from '@ionic/angular';

import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-quartier',
  templateUrl: './quartier.page.html',
  styleUrls: ['./quartier.page.scss'],
})
export class QuartierPage implements OnInit, AfterViewInit {

  public area: string = '';
  public keyboardOn: boolean = true;


  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    private keyboard: Keyboard,

  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
  }

  getUserArea(event) {
    if (event.key === "Enter") return this.userDataService.setUserArea(this.area),
    setTimeout(() => {
      this.keyboardOn = true;
    }, 300);
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'recap-a-propos']);
  }

  // toggleSwipeUp(event) {
  //   console.log('test 01')
  //   this.keyboardOn = false;
  // }


  checkFocus() {
    this.keyboardOn = false;
  }

  checkBlur() {
    setTimeout(() => {
      this.keyboardOn = true;
    }, 300);
  };

}


