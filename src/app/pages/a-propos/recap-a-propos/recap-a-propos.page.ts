import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recap-a-propos',
  templateUrl: './recap-a-propos.page.html',
  styleUrls: ['./recap-a-propos.page.scss'],
})
export class RecapAProposPage implements OnInit {

  private isCompleted: boolean = false;

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
    this.showSwipeDelay();
  }

  showSwipeDelay() {
    setTimeout(() => {
      this.isCompleted = true;
    }, 2000);
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'motif']);
  }

}

