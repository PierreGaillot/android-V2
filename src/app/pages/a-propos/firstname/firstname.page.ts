import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ModalController, NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalRGPDPage } from '../modal-rgpd/modal-rgpd.page';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.page.html',
  styleUrls: ['./firstname.page.scss'],
})
export class FirstnamePage implements OnInit, AfterViewInit {

  public firstname: string = '';
  private isCompleted: boolean = false;

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    private keyboard: Keyboard,
    public db: AngularFirestore,
    public modalController:ModalController,
  ) { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    // Affiche la MODALE des RGPD;
    this.presentRGPDModal();
  }


  getUserFirstame(event) {
    let firstnameUpperCase: string = '';

    if (event.key === "Enter")
      // Set first letter of firstname to UpperCase 
      return firstnameUpperCase = this.firstname.charAt(0).toUpperCase() + this.firstname.slice(1), 
      // Create new user with his firstname
      this.userDataService.createUser(firstnameUpperCase),
      this.keyboard.hide(),
      // this.isCompleted = true;
      this.showSwipeDelay();
  }

  showSwipeDelay() {
    setTimeout(() => {
      this.isCompleted = true;
    }, 300);
  }

  onSwipeUp($event) {
      this.navCtrl.navigateForward(['/', 'sexe']);
  }


// AFFICHAGE DE LA MODALE RGPD
  async presentRGPDModal() {
    const modal = await this.modalController.create({
      component: ModalRGPDPage,
      cssClass: 'auto-height',
      swipeToClose: false,
      backdropDismiss: false,
    });
    return await modal.present();
  }
}
