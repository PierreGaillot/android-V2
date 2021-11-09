import { Component, OnInit } from '@angular/core';
// import { UserDataModel } from 'src/app/models/user-data.model';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.page.html',
  styleUrls: ['./firstname.page.scss'],
})
export class FirstnamePage implements OnInit {

  public firstname: string = '';
  // public userFirstname: UserDataModel;

  constructor(
    public userDataService: UserDataService;
  ) { }

  ngOnInit() { }

  getFirstame() {
    this.userDataService.createUser(this.firstname);
  }

}
