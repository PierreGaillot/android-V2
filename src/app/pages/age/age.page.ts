import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit, AfterViewInit {

  private age: string = '';

  constructor(
    public userDataService: UserDataService,
    public formsModule: FormsModule,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
  }

  setUserAge(value): void {
    this.userDataService.setUserName(value);
  }

}
