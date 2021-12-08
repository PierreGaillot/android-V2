import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-motif',
  templateUrl: './motif.page.html',
  styleUrls: ['./motif.page.scss'],
})
export class MotifPage implements OnInit {

  private isCompleted: boolean = false;
  private disabledStatus: boolean = true;
  private selectedAnswersList = [];
  private finalAnswersContent = [];
  private checkboxesAnswersList = [
    {
      id: 'reponse-1',
      content: 'Être aidé pour les modes de gardes d\'enfant, la mobilité, l\'accès aux droits, l\'accompagnement numérique...',
      isChecked: false,
      icon: '../../../../assets/img/icon-gardeEnfants.svg'
    },
    {
      id: 'reponse-2',
      content: 'Être coaché pour mes démarches d\'emploi (simulations entretiens d\'embauche, insertion par le sport…)',
      isChecked: false,
      icon: '../../../../assets/img/icon-emploi.svg'
    },
    {
      id: 'reponse-3',
      content: 'Trouver un stage en entreprise',
      isChecked: false,
      icon: '../../../../assets/img/icon-stage.svg'
    },
    {
      id: 'reponse-4',
      content: 'Effectuer un Service Civique',
      isChecked: false,
      icon: '../../../../assets/img/icon-service.svg'
    },
    {
      id: 'reponse-5',
      content: 'Trouver une Alternance (contrat d’apprentissage ou contrat de professionnalisation)',
      isChecked: false,
      icon: '../../../../assets/img/icon-apprentissage.svg'
    },
    {
      id: 'reponse-6',
      content: 'Accéder à une formation professionnelle. Trouver un Emploi (Intérim, CDD, CDI…)',
      isChecked: false,
      icon: '../../../../assets/img/icon-student.svg'
    },
  ]


  constructor(
    public userDataService: UserDataService,
    private navCtrl: NavController,

  ) { }

  ngOnInit() { }

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
    if (this.finalAnswersContent.length > 0) return this.userDataService.setUserPurpose(this.finalAnswersContent), this.isCompleted = true;
    return console.log('Aucun motif n\'a été sélectionné');
  }

  onSwipeUp($event) {
    this.navCtrl.navigateForward(['/', 'methode']);
  }z
}
