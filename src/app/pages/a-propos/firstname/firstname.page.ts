import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.page.html',
  styleUrls: ['./firstname.page.scss'],
})
export class FirstnamePage implements OnInit {

  public firstname: string = '';
  private isCompleted: boolean = false;

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    private keyboard: Keyboard,
    public db: AngularFirestore
  ) { }

  ngOnInit() {
    let result;
    this.db.collection('users').doc('TlC6iECe1I2zZTMTjLRH').get().toPromise()
      .then((doc) => {
        result = doc.data();
        console.log(result);
      })
  }

  getUserFirstame(event) {
    let firstnameUpperCase: string = '';

    if (event.key === "Enter")
      // Set first letter of firstname to UpperCase 
      return firstnameUpperCase = this.firstname.charAt(0).toUpperCase() + this.firstname.slice(1), 
      // Create new user with his firstname
      this.userDataService.createUser(firstnameUpperCase),
      this.keyboard.hide(),
      // this.isCompleted = true;
      this.showSwipeDelay();
  }

  showSwipeDelay() {
    setTimeout(() => {
      this.isCompleted = true;
    }, 300);
  }

  onSwipeUp($event) {
      this.navCtrl.navigateForward(['/', 'sexe']);
  }
}
