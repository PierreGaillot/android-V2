import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.page.html',
  styleUrls: ['./modal-contact.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalContactPage implements OnInit {

  private phoneChecked: boolean = false;
  private mailChecked: boolean = false;
  public contact: string = '';
  public disabledStatus: boolean = true;
  public displayAlert: boolean = false;

  constructor(
    public userDataService: UserDataService,
    public modalController: ModalController
  ) { }

  @Input() question: string;

  ngOnInit() {
    this.reset()
  }

  // Dismiss modal
  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  isPhoneChecked(status) {
    this.phoneChecked = status;
    this.mailChecked = !status;
  }

  isMailChecked(status) {
    this.mailChecked = status;
    this.phoneChecked = !status;
    // console.log('mail check !');
  }

  reset() {
    this.phoneChecked = false;
    this.mailChecked = false;
  }

  getUserContact(event) {
    if (event.key === "Enter") {
      // Testing phone number format, regex matches each of these lines
        // 0123456789
        // 01 23 45 67 89
        // 01.23.45.67.89
        // 0123 45.67.89
        // 0033 123-456-789
        // +33-1.23.45.67.89
        // +33 - 123 456 789
        // +33(0) 123 456 789
        // +33 (0)123 45 67 89
        // +33 (0)1 2345-6789
        // +33(0) - 123456789
      const tel = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(this.contact);

      // Testing email format
      const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.contact);

      if (tel || email) {
        this.userDataService.setUserContact(this.contact);
        this.disabledStatus = false;
        this.displayAlert = false;
        // console.log(`regex tel : ${tel} - regex mail : ${email}`);
        // console.log(this.userDataService.user[0]);

        if (this.phoneChecked) {
          this.userDataService.user[0].isPhone = true;
          this.userDataService.user[0].isMail = false;
        } else if (this.mailChecked) {
          this.userDataService.user[0].isMail = true;
          this.userDataService.user[0].isPhone = false;
        } 
      } else {
        this.displayAlert = true;
        this.disabledStatus = true;
        // console.log(`regex error ${tel}`);
        // console.log(this.userDataService.user[0]);
      }
    } 
  }

}