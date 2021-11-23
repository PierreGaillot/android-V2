import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, AfterViewInit {

  private isCompleted: boolean = false;
  private userFirstname: string = '';
  private phoneChecked: boolean = false;
  private mailChecked: boolean = false;
  public contact: string = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.reset()
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

  isPhoneChecked(status) {
    this.phoneChecked = status;
    this.mailChecked = !status;
  }

  isMailChecked(status) {
    this.mailChecked = status;
    this.phoneChecked = !status;
    console.log('mail check !');
  }

  reset() {
    this.phoneChecked = false;
    this.mailChecked = false;
  }

  getUserContact(event) {
    if (event.key === "Enter") {
      this.userDataService.setUserContact(this.contact);
      console.log('Contact : ' + this.contact);
      this.isCompleted = true;
    } else if (this.phoneChecked) {
      this.userDataService.user[0].isPhone = true;
      this.userDataService.user[0].isMail = false;
    } else if (this.mailChecked) {
      this.userDataService.user[0].isMail = true;
      this.userDataService.user[0].isPhone = false;
    } 
  }
}
