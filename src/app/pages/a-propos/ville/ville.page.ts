import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.page.html',
  styleUrls: ['./ville.page.scss'],
})
export class VillePage implements OnInit {

  private isCompleted: boolean = false;
  public userCity: string = '';
  public nextPage: string = '';

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.userDataService.showUserData();
  }

  getUserCity(city) {
    this.userDataService.setUserCity(city);
    this.isCompleted = true;
    this.userCity = this.userDataService.user[0].city;

    if (this.userCity === 'Tourcoing') {
      this.nextPage = '/quartier';
    } else {
      this.nextPage = '/motif';
    }
  }

  onSwipeUp($event) {
    if (this.userCity === "Tourcoing") {
      this.navCtrl.navigateForward(['/', 'quartier']);
    } else {
      this.navCtrl.navigateForward(['/', 'motif']);
    }
  }

}
