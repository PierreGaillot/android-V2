import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.page.html',
  styleUrls: ['./methode.page.scss'],
})
export class MethodePage implements OnInit {

  private isCompleted: boolean = false; 

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

  getUserMethod(userMethod) {
    this.userDataService.setUserMethod(userMethod);
    this.isCompleted = true;
  }

}
