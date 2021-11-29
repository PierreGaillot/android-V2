import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recap-total',
  templateUrl: './recap-total.page.html',
  styleUrls: ['./recap-total.page.scss'],
})
export class RecapTotalPage implements OnInit {

  private userFirstname: string = '';
  private emaill = {
    to: 'gournay.guillaume@gmail.com',
    cc: '',
    bcc: [],
    attachments: [],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  }

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'fin']);
  }

}

