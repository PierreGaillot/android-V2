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
  public disabledStatus: boolean = true;
  public currentDateTime = this.datepipe.transform((new Date), 'dd/MM/yyyy h:mm:ss');
  public mailToSend = {
    to: ['e.simon@projet-surmesure.fr'],
    message: {
      subject: 'SurMesure Formulaire : '  + this.userData.firstname,
      // text: 'This is the plaintext section of the email body.',
      html: this.emailConstructor(),
    }
  }

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    public db: AngularFirestore,
    public datepipe: DatePipe,
    public modalController:ModalController
  ) { }

  ngOnInit() {
    this.emailConstructor();
  }

  // DISPLAY RGPD MODAL
  async presentRGPDModal() {
    const modal = await this.modalController.create({
      component: ModalRGPDPage,
      cssClass: 'auto-height'
    });
    return await modal.present();
  }

  toggleSendBtn(event) {
    this.disabledStatus = !event.target.checked
  }

  //  CREAT EMAIL TO BE SENT
  emailConstructor() {
    const userData = this.userData;

    //return le type du contact
    function getContactType(isPhone) {
      if (isPhone) {
        return 'Téléphone'
      } else {
        return 'e-mail'
      }
    };

    // retourne une liste du tableau
    function enumPurpose(purpose) {
      let purboseList: string = ``;
      for (let i = 0; i < purpose.length; i++) {
        // purboseList.concat('- ',purpose[i]);
        purboseList += '<li>' + purpose[i] + '</li>';
        console.log(purpose[i]);
      }
      console.log('test : ' + purboseList);
      return purboseList;
    };
    const mail: string =
      `
      <h2>Prise de contact SUR-MESURE</h2>
      Créé le ${this.currentDateTime}

      <h2>A PROPOS </h2>

      <ul>
        <li>Nom : ${userData.firstname}</li>
        <li>Sexe : ${userData.sexe}</li>
        <li>age : ${userData.age}</li>
        <li>ville : ${userData.city}</li>
        <li>quartier : ${userData.area}</li>
      </ul>
      
      <h2>ACCOMPAGNEMENT</h2>
      <ul>
        <li>souhaite est accompagné pour : 
          <ul>${enumPurpose(userData.purpose)}<ul>
        </li>
        <li>avec un accompagnement : ${userData.method}</li>
        <li>avec un rytme de : ${userData.contactFrequency}</li>
      </ul>
      
      <h2>CONTACT</h2>
      <ul>
        <li>type de contact : ${getContactType(userData.isPhone)}</li>
        <li>contact : ${userData.contact}</li>
      </ul>
      `
    return mail
  }

  // SENDING USER DATA 
  sendUserData() {
    // this.db.collection('users').add(this.userDataToSend);
    this.db.collection('mail').add(this.mailToSend);
    this.navCtrl.navigateForward(['/', 'fin']);
  }

}
