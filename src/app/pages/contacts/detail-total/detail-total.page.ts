import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ModalController } from '@ionic/angular';
import { ModalContactPage } from '../modal-contact/modal-contact.page';

@Component({
  selector: 'app-detail-total',
  templateUrl: './detail-total.page.html',
  styleUrls: ['./detail-total.page.scss'],
})
export class DetailTotalPage implements OnInit {

  constructor( 
    public userDataService: UserDataService,
    public modalController: ModalController
  ) { }

  ngOnInit() { }

  async presentModal(questionName) {
    const modal = await this.modalController.create({
      component: ModalContactPage,
      // passing value for dynamic display in the modal
      componentProps: {
        'question': questionName
      },
      cssClass: 'auto-height'
    });
    return await modal.present();
  }
}

