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
  isAreaFilled: boolean = false;
  public city: string = '';

  constructor( 
    public userDataService: UserDataService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.checkArea();
    this.city = this.userDataService.user[0].city;
  }

  checkArea() {
    if (this.userDataService.user[0].area != '') {
      this.isAreaFilled = true;
    } 
  }

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

