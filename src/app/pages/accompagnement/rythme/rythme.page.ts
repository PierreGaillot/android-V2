import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-rythme',
  templateUrl: './rythme.page.html',
  styleUrls: ['./rythme.page.scss'],
})
export class RythmePage implements OnInit {
  private contactFrequency: string = '';
  private disabledStatus: boolean = true;

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  getUserContactFrequency(userContactFrequency) {
    this.disabledStatus = true;
    this.userDataService.setUserContactFrequency(userContactFrequency);
  }

  toggleTextInput() {
    if (this.disabledStatus == true) return this.disabledStatus = false;
    return this.disabledStatus = true;
  }

  getTextContactFrequency(event) {
    if (event.key === "Enter") return this.userDataService.setUserContactFrequency(this.contactFrequency);
  }

}
