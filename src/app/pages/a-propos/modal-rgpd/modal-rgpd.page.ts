import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-modal-rgpd',
  templateUrl: './modal-rgpd.page.html',
  styleUrls: ['./modal-rgpd.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalRGPDPage implements OnInit {

  constructor(
    public modalCtrl:ModalController,
  ) { 
  }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalCtrl.dismiss()
  }

}

