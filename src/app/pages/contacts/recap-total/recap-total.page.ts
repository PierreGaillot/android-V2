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
    this.navCtrl.navigateForward(['/', 'fin']);
  }



  emailConstructor(){
    const userData = this.userDataService.user[0];
    
    //return le type du contact
    function getContactType(isPhone){
      if(isPhone){
        return 'Téléphone'
      }else{
        return 'e-mail'
      }
    };

    // retourne une liste du tableau
    function enumPurpose(purpose){
      let purboseList:string = `
      `;
      for (let i = 0; i < purpose.length ; i ++){
        // purboseList.concat('- ',purpose[i]);
        purboseList += ' - ' + purpose[i] + `
        `;
        console.log(purpose[i]);
      }
      console.log('test : ' + purboseList);
      return purboseList;
    };
  
    const cc:string = 'S-M: contact: ' + userData.firstname ;
    const mail:string = 
    `
                --==## Prise de contact SUR-MESURE ##==--
                        créé le 10.10.2021 à 10h10

    ########################### A PROPOS ##################################

    Nom : ${userData.firstname},
    Sexe : ${userData.sexe}, 
    age : ${userData.age}, 
    ville : ${userData.city},
    quartier : ${userData.area}

    ######################## ACCOMPAGNEMENT ###############################

    souhaite est accompagné pour : ${enumPurpose(userData.purpose)}
    avec un accompagnement : ${userData.method},
    avec un rytme de : ${userData.contactFrequency},
    
    ########################### CONTACT ###################################

    type de contact : ${getContactType(userData.isPhone)},
    contact : ${userData.contact},
    `
    console.log(mail)
  }
}

