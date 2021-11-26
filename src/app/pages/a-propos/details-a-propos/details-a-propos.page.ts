import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAProposPage } from '../modal-a-propos/modal-a-propos.page';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details-a-propos.page.html',
  styleUrls: ['./details-a-propos.page.scss'],
})
export class DetailsAProposPage implements OnInit, AfterViewInit {
  
  constructor(
    public userDataService: UserDataService,
    public modalController: ModalController
  ) { }

  
  ngOnInit() { }
  
  ngAfterViewInit() {
    this.getUserData();
  }
  
  getUserData() {
    this.userDataService.getUserData();
    console.log(this.userDataService.user);
  }
  
  async presentModal(questionName) {
    const modal = await this.modalController.create({
      component: ModalAProposPage,
      // passing value for dynamic display in the modal
      componentProps: {
        'question': questionName
      }
    });
    return await modal.present();
  }

}
