import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  private userFirstname: string = '';
  private phoneChecked: boolean = false;
  private mailChecked: boolean = false;

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
    console.log('phone check !');
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
}
