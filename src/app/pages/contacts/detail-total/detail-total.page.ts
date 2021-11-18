import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ModalController } from '@ionic/angular';
import { ModalAProposPage } from '../../a-propos/modal-a-propos/modal-a-propos.page';

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


  getUserData() {
    this.userDataService.getUserData();
    console.log(this.userDataService.user);
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.getUserData();
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
