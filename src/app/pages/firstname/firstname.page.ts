import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.page.html',
  styleUrls: ['./firstname.page.scss'],
})
export class FirstnamePage implements OnInit {

  public firstname: string = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() { }

  setUserFirstame() {
    this.userDataService.createUser(this.firstname);
  }

}
