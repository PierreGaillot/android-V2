import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recap-a-propos',
  templateUrl: './recap-a-propos.page.html',
  styleUrls: ['./recap-a-propos.page.scss'],
})
export class RecapAProposPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'motif']);
  }

}

