import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-recap-total',
  templateUrl: './recap-total.page.html',
  styleUrls: ['./recap-total.page.scss'],
})
export class RecapTotalPage implements OnInit {

  private userFirstname: string = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.userDataService.showUserData();
    this.userFirstname = this.userDataService.getUserFirstname();
  }

}
