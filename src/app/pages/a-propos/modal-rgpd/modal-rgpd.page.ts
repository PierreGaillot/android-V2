import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-rgpd',
  templateUrl: './modal-rgpd.page.html',
  styleUrls: ['./modal-rgpd.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalRGPDPage implements OnInit {

  constructor(
    public modalCtrl:ModalController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalCtrl.dismiss();
  }
  
  async navigateToHome() {
    this.router.navigate(['/home']);
    await this.modalCtrl.dismiss();
  }

}

