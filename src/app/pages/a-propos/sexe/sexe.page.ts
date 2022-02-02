import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sexe',
  templateUrl: './sexe.page.html',
  styleUrls: ['./sexe.page.scss'],
})


export class SexePage implements OnInit, AfterViewInit {
  
public userFirstname: string  = '';
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

  getUserSexe(sexe) {
    this.userDataService.setUserSexe((sexe as HTMLInputElement).value);
    this.isCompleted = true;
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'age']);
  }

}
