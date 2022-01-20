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
  currentRoute: string = '';
  isSendDataPage: boolean = false;

  constructor(
    public modalCtrl:ModalController,
    private router:Router
  ) { }

  ngOnInit() {
    // console.log(this.router.url);
    this.getRoute();
  }

  getRoute() {
    if (this.router.url === '/send-data') return this.isSendDataPage = true, console.log(this.isSendDataPage);
    if (this.router.url !== '/send-data') return this.isSendDataPage = false, console.log(this.isSendDataPage);
  }

  async closeModal(){
    await this.modalCtrl.dismiss();
  }
  
  async navigateToHome() {
    this.router.navigate(['/home']);
    await this.modalCtrl.dismiss();
  }

  // Dismiss modal
  dismiss(): void {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

