import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-modal-accompagnement',
  templateUrl: './modal-accompagnement.page.html',
  styleUrls: ['./modal-accompagnement.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalAccompagnementPage implements OnInit {

  public disabledStatus: boolean = true;

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

  constructor(
    public modalController: ModalController,
    public userDataService: UserDataService
  ) { }

  @Input() question: string;

  ngOnInit() {
  }

  // Dismiss modal
  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

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
}
