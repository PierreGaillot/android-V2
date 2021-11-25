import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sexe',
  templateUrl: './sexe.page.html',
  styleUrls: ['./sexe.page.scss'],
})


export class SexePage implements OnInit, AfterViewInit {
  
private userFirstname: string  = '';
private isCompleted: boolean = false; 

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

  getUserSexe(sexe) {
    this.userDataService.setUserSexe(sexe);
    this.isCompleted = true;
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'age']);
}

}
