import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-recap-total',
  templateUrl: './recap-total.page.html',
  styleUrls: ['./recap-total.page.scss'],
})
export class RecapTotalPage implements OnInit {

  public userFirstname: string = '';
  public userData = this.userDataService.user[0];
  public userDataToSend: {} = {
    firstname: this.userData.firstname,
    age: this.userData.age,
    sexe: this.userData.sexe,
    city: this.userData.city,
    area: this.userData.area,
    purpose: this.userData.purpose,
    method: this.userData.method,
    contactFrequency: this.userData.contactFrequency,
    contact: this.userData.contact
  };

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    public db: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() { 
    this.userFirstname = this.userDataService.user[0].firstname;
  }

  sendData() {
    this.db.collection('users').add(this.userDataService.user[0]);
  }

  onSwipeUp($event) {
    this.db.collection('users').add(this.userDataToSend);
    this.navCtrl.navigateForward(['/', 'fin']);
  }

}

