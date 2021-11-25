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
    if (event.key === "Enter") return this.userDataService.createUser(this.firstname);
    return this.isCompleted = true;

  }

  onSwipeUp($event) {
      this.navCtrl.navigateForward(['/', 'sexe']);
  }
}
