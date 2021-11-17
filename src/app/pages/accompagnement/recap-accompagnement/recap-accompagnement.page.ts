import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-recap-accompagnement',

  templateUrl: './recap-accompagnement.page.html',
  styleUrls: ['./recap-accompagnement.page.scss'],
})
export class RecapAccompagnementPage implements OnInit {

  private userFirstname: string = '';

  constructor(
    public userDataService: UserDataService
  ) {
  }

  ngOnInit() {
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

}
