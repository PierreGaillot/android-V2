
import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.page.html',
  styleUrls: ['./methode.page.scss'],
})
export class MethodePage implements OnInit {

  public isCompleted: boolean = false; 

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  getUserMethod(userMethod) {
    this.userDataService.setUserMethod((userMethod as HTMLInputElement).value);
    this.isCompleted = true;
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'rythme']);
  }
  
}
