import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ModalController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';
import { ModalRGPDPage } from '../../a-propos/modal-rgpd/modal-rgpd.page';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.page.html',
  styleUrls: ['./send-data.page.scss'],
})
export class SendDataPage implements OnInit {
  public userFirstname: string = '';
  public userData = this.userDataService.user[0];
  private disabledStatus: boolean = true;
  public currentDateTime = this.datepipe.transform((new Date), 'dd/MM/yyyy h:mm:ss');

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    public db: AngularFirestore,
    public datepipe: DatePipe,
    public modalController:ModalController
  ) { }

  ngOnInit() {
  }

  // AFFICHAGE DE LA MODALE RGPD
  async presentRGPDModal() {
    const modal = await this.modalController.create({
      component: ModalRGPDPage,
      cssClass: 'auto-height',
      // swipeToClose: false,
      // backdropDismiss: false,
    });
    return await modal.present();
  }

  toggleSendBtn(event) {
    this.disabledStatus = !event.target.checked
  }

}
