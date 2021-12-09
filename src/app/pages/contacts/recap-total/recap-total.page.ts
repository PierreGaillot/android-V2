import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { concat } from 'rxjs';

@Component({
  selector: 'app-recap-total',
  templateUrl: './recap-total.page.html',
  styleUrls: ['./recap-total.page.scss'],
})
export class RecapTotalPage implements OnInit {

  public userFirstname: string = '';
  public userData = this.userDataService.user[0];
  public userDataToSend: {} = {
    firstname: this.userData.firstname,
    age: this.userData.age,
    sexe: this.userData.sexe,
    city: this.userData.city,
    area: this.userData.area,
    purpose: this.userData.purpose,
    method: this.userData.method,
    contactFrequency: this.userData.contactFrequency,
    contact: this.userData.contact
  };

  public mailToSend = {
    to: ['pr.gaillot@gmail.com'],
    message: {
      subject: 'SurMesure Formulaire :'  + this.userData.firstname,
      // text: 'This is the plaintext section of the email body.',
      html: this.emailConstructor(),
    }
  }

  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,
    public db: AngularFirestore
  ) { }

  ngOnInit() {
    this.emailConstructor();

  }

  ngAfterViewInit() {
    this.userFirstname = this.userDataService.user[0].firstname;
  }

  sendData() {
    this.db.collection('users').add(this.userDataService.user[0]);
  }

  onSwipeUp($event) {
    this.db.collection('users').add(this.userDataToSend);
    this.db.collection('mail').add(this.mailToSend);
    this.navCtrl.navigateForward(['/', 'fin']);
  }



  emailConstructor() {
    const userData = this.userDataService.user[0];

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
      let purboseList: string = `
      `;
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
    créé le 10.10.2021 à 10h10

    <h2>A PROPOS </h2>

    <ul>
      <li>Nom : ${userData.firstname},</li>
      <li>Sexe : ${userData.sexe}</li>
      <li>age : ${userData.age}</li>
      <li>ville : ${userData.city}</li>
      <li>quartier : ${userData.area}</li>
    </ul>
    
    <h2>ACCOMPAGNEMENT</h2>
    <ul>
      <li>souhaite est accompagné pour : <ul>${enumPurpose(userData.purpose)}<ul></li>
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
}

