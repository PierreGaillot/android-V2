import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';
// import { concat } from 'rxjs';

@Component({
  selector: 'app-recap-total',
  templateUrl: './recap-total.page.html',
  styleUrls: ['./recap-total.page.scss'],
})
export class RecapTotalPage implements OnInit {

  public userFirstname: string = '';
  public userData = this.userDataService.user[0];
  public isCompleted: boolean = false;
  public currentDateTime = this.datepipe.transform((new Date), 'dd/MM/yyyy h:mm:ss');

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    public db: AngularFirestore,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    // this.emailConstructor();
    // this.showSwipeDelay();
  }

  ngAfterViewInit() {
    this.userFirstname = this.userData.firstname;
  }

  // sendData() {
  //   this.db.collection('users').add(this.userData);
  // }

  // showSwipeDelay() {
  //   setTimeout(() => {
  //     this.isCompleted = true;
  //   }, 2000);
  // }

  // onSwipeUp($event) {
  //   // this.db.collection('users').add(this.userDataToSend);
  //   // this.db.collection('mail').add(this.mailToSend);
  //   this.navCtrl.navigateForward(['/', 'send-data']);
  // }

}

