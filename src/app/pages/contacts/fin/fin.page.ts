import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.page.html',
  styleUrls: ['./fin.page.scss'],
})
export class FinPage implements OnInit {
  private userFirstname:string = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.userFirstname = this.userDataService.getUserFirstname();

  }

}
