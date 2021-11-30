import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.page.html',
  styleUrls: ['./firstname.page.scss'],
})
export class FirstnamePage implements OnInit {

  public firstname: string = '';
  private isCompleted: boolean = false;

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    
  ) { }

  ngOnInit() {
  }

  getUserFirstame(event) {
    let firstnameUpperCase: string = '';

    if (event.key === "Enter")
      // Set first letter of firstname to UpperCase 
      return firstnameUpperCase = this.firstname.charAt(0).toUpperCase() + this.firstname.slice(1), 
      // Create new user with his firstname
      this.userDataService.createUser(firstnameUpperCase);
    return this.isCompleted = true;
  }

  onSwipeUp($event) {
      this.navCtrl.navigateForward(['/', 'sexe']);
  }
}
