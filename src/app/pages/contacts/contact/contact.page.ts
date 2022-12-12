import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

import { NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public isCompleted: boolean = false;
  // public phoneChecked: boolean = false;
  // public mailChecked: boolean = false;
  public contactMail: string = '';
  public contactPhone: string = '';
  public displayAlertPhone: boolean = false;
  public displayAlertMail: boolean = false;
  public keyboardOn: boolean = false;

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    private keyboard: Keyboard
  ) {}

  ngOnInit() {
    this.reset();
  }

  reset() {
    // this.phoneChecked = false;
    // this.mailChecked = false;
  }

  getUserPhone(event) {
    if (event.key === 'Enter') {
      this.keyboard.hide(),
        setTimeout(() => {
          this.keyboardOn = true;
        }, 1000);

      const tel = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(this.contactPhone);

      if (tel) {
        this.userDataService.setUserPhone(this.contactPhone);
        this.isCompleted = true;
        this.displayAlertPhone = false;
        console.log(`regex tel : ${tel}`);
        console.log("isCompleted : "+this.isCompleted);
      } else {
        this.displayAlertPhone = true;
        this.isCompleted = false;
        console.log(`regex tel error ${tel}`);
        console.log(this.userDataService.user[0]);
      }
    }
  }

  getUserMail(event) {
    if (event.key === 'Enter') {
      this.keyboard.hide(),
        setTimeout(() => {
          this.keyboardOn = true;
        }, 1000);
      const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.contactMail);

      if (email) {
        this.userDataService.setUserMail(this.contactMail);
        this.displayAlertMail = false;
        console.log(`regex email : ${email}`);
        console.log("isCompleted : "+this.isCompleted);
      } else {
        this.displayAlertMail = true;
        console.log(`regex email error ${email}`);
        console.log(this.userDataService.user[0]);
      }
    }
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'recap-total']);
  }

  // getUserContact(event) {
  //   if (event.key === 'Enter') {
  //     this.keyboard.hide(),
  //       setTimeout(() => {
  //         this.keyboardOn = true;
  //       }, 1000);
  //     // Testing phone number format, regex matches each of these lines
  //     // 0123456789
  //     // 01 23 45 67 89
  //     // 01.23.45.67.89
  //     // 0123 45.67.89
  //     // 0033 123-456-789
  //     // +33-1.23.45.67.89
  //     // +33 - 123 456 789
  //     // +33(0) 123 456 789
  //     // +33 (0)123 45 67 89
  //     // +33 (0)1 2345-6789
  //     // +33(0) - 123456789
  //     const tel =
  //       /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(
  //         this.contactPhone
  //       );

  //     // Testing email format
  //     const email =
  //       /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
  //         this.contactMail
  //       );

  //     if (tel) {
  //       this.userDataService.setUserContact(this.contactPhone);
  //       this.isCompleted = true;
  //       this.displayAlertPhone = false;
  //       console.log(`regex tel : ${tel} - regex mail : ${email}`);
  //       console.log(this.userDataService.user[0]);

  //       if (this.phoneChecked) {
  //         this.userDataService.user[0].isPhone = true;
  //         this.userDataService.user[0].isMail = false;
  //       } else if (this.mailChecked) {
  //         this.userDataService.user[0].isMail = true;
  //         this.userDataService.user[0].isPhone = false;
  //       }
  //     } else {
  //       this.displayAlertPhone = true;
  //       console.log(`regex error ${tel}`);
  //       console.log(this.userDataService.user[0]);
  //     }

  //     // if (tel || email) {
  //     //   this.userDataService.setUserContact(this.contact);
  //     //   this.isCompleted = true;
  //     //   this.displayAlert = false;
  //     //   console.log(`regex tel : ${tel} - regex mail : ${email}`);
  //     //   console.log(this.userDataService.user[0]);

  //     //   if (this.phoneChecked) {
  //     //     this.userDataService.user[0].isPhone = true;
  //     //     this.userDataService.user[0].isMail = false;
  //     //   } else if (this.mailChecked) {
  //     //     this.userDataService.user[0].isMail = true;
  //     //     this.userDataService.user[0].isPhone = false;
  //     //   }
  //     // } else {
  //     //   this.displayAlert = true;
  //     //   console.log(`regex error ${tel}`);
  //     //   console.log(this.userDataService.user[0]);
  //     // }
  //   }
  // }
}
