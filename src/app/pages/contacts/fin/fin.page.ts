import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { UserDataModel } from 'src/app/models/user-data.model';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.page.html',
  styleUrls: ['./fin.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinPage implements OnInit, AfterViewInit {
  
options:AnimationOptions = {
  path:'../../../../assets/img/data.json'
}

  public userContactType: string = '';
  public contactIsPhone : boolean;
  public userData: UserDataModel[] = [];

  constructor(
    public userDataService: UserDataService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() { 
    this.userData = this.userDataService.getUserData();
    this.contactIsPhone = this.userData[0].isPhone;
    console.log(this.contactIsPhone);
    this.getContactType(this.contactIsPhone);
  }

  getContactType(isPhone) {
    if (isPhone) {
      this.userContactType = 'téléphone';
    } else {
      this.userContactType = 'e-mail';
    } 
  }
  
}
