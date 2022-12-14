import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.page.html',
  styleUrls: ['./modal-contact.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalContactPage implements OnInit {
  // A PROPOS
  public firstname: string = '';
  public area: string = '';

  // ACCOMPAGNEMENT
  // USER PURPOSE
  public selectedAnswersList = []; 
  public finalAnswersContent = [];
  public checkboxesAnswersList = [
    {
      id: 'reponse-1',
      content: 'Être aidé pour les modes de gardes d\'enfant, la mobilité, l\'accès aux droits, l\'accompagnement numérique...',
      isChecked: false
    },
    {
      id: 'reponse-2',
      content: 'Être coaché pour mes démarches d\'emploi (simulations entretiens d\'embauche, insertion par le sport…)',
      isChecked: false
    },
    {
      id: 'reponse-3',
      content: 'Trouver un stage en entreprise',
      isChecked: false
    },
    {
      id: 'reponse-4',
      content: 'Effectuer un Service Civique',
      isChecked: false
    },
    {
      id: 'reponse-5',
      content: 'Trouver une Alternance (contrat d’apprentissage ou contrat de professionnalisation)',
      isChecked: false
    },
    {
      id: 'reponse-6',
      content: 'Accéder à une formation professionnelle. Trouver un Emploi (Intérim, CDD, CDI…)',
      isChecked: false
    },
  ] 
  // USER CONTACT FREQUENCY
  public contactFrequency: string = '';
  public disabledInput: boolean = true;

  // CONTACT
  public phoneChecked: boolean = false;
  public mailChecked: boolean = false;
  public mail: string = "";
  public phone: string = "";
  public contact: string = '';
  public disabledStatus: boolean = true;
  public displayAlert: boolean = false;
  public displayAlertPhone: boolean = false;
  public displayAlertMail: boolean = false;
  public data:any;

  constructor(
    public userDataService: UserDataService,
    public modalController: ModalController
  ) { }

  @Input() question: string;

  ngOnInit() {
    this.reset()
    this.data = this.userDataService.getUserData;
    console.log(this.data)
    console.log(this.data.phone)
  }

  // Dismiss modal
  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  // ######################## A PROPOS ########################

  updateUserFirstame(event): void {
    if (event.key === "Enter" && this.firstname !== '') {
      this.userDataService.setUserFirstname(this.firstname)
      this.disabledStatus = false;
    } 
  }

  updateUserAge(ageValue): void {
    this.userDataService.setUserAge((ageValue as HTMLInputElement).value);
    
    if (ageValue !== '') {
      this.disabledStatus = false;
    }       
  }

  updateUserSexe(sexeValue): void {
    this.userDataService.setUserSexe((sexeValue as HTMLInputElement).value);
    
    if (sexeValue !== '') {
      this.disabledStatus = false;
    }       
  }

  updateUserCity(cityValue): void {
    this.userDataService.setUserCity((cityValue as HTMLInputElement).value);
    
    if (cityValue !== '') {
      this.disabledStatus = false;
    }       
  }

  updateUserArea(event): void {
    if (event.key === "Enter" && this.area !== '') {
      this.userDataService.setUserArea(this.area)
      this.disabledStatus = false;
    } 
  }

  // ######################## ACCOMPAGNEMENT ########################

  // USER PURPOSE
  changeSelection() {
    this.fetchSelectedAnswers();
  }

  fetchSelectedAnswers() {
    // Create a new array of objects where isChecked key = true
    this.selectedAnswersList = this.checkboxesAnswersList.filter((answer, index) => {
      return answer.isChecked
    });

    // Allow user to click on validate btn when at least one option is checked 
    if (this.selectedAnswersList.length > 0) return this.disabledStatus = false;
    return this.disabledStatus = true;
  }

  getUserPurpose() {
    // Get the content of every checked answer 
    this.selectedAnswersList.forEach((answer) => {
      this.finalAnswersContent.push(answer.content);
    });

    // Set User purpose with checked answers content 
    if (this.finalAnswersContent.length > 0) return this.userDataService.setUserPurpose(this.finalAnswersContent),
      this.dismiss();
    return console.log('Aucun motif n\'a été sélectionné');
  }

  // USER METHOD
  getUserMethod(userMethod) {
    this.userDataService.setUserMethod((userMethod as HTMLInputElement).value);

    if (userMethod !== '') {
      this.disabledStatus = false;
    }  
  }

  // USER CONTACT FREQUENCY
  getUserContactFrequency(userContactFrequency) {
    this.disabledInput = true;
    this.userDataService.setUserContactFrequency((userContactFrequency as HTMLInputElement).value);

    if (userContactFrequency !== '') {
      this.disabledStatus = false;
    }
  }

  toggleTextInput() {
    if (this.disabledInput == true) return this.disabledInput = false;
    return this.disabledInput = true;
  }

  getTextContactFrequency(event) {
    if (event.key === "Enter") return this.userDataService.setUserContactFrequency(this.contactFrequency),
    this.disabledStatus = false;
  }


  // ######################## CONTACT ########################

  reset() {
    this.phoneChecked = false;
    this.mailChecked = false;
  }


  getUserPhone(event) {


      const tel = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(this.phone);

      if (tel) {
        this.userDataService.setUserPhone(this.phone);
        this.displayAlertPhone = false;
        console.log(`regex tel : ${tel}`);
      } else {
        this.displayAlertPhone = true;
        console.log(`regex tel error ${tel}`);
        console.log(this.userDataService.user[0]);
      }
    
  }

  getUserMail(event) {

      const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.mail);

      if (email) {
        this.userDataService.setUserMail(this.mail);
        this.displayAlertMail = false;
        console.log(`regex email : ${email}`);
      } else {
        this.displayAlertMail = true;
        console.log(`regex email error ${email}`);
        console.log(this.userDataService.user[0]);
      }
    
  }

}
