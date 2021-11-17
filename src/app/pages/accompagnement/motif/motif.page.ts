import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motif',
  templateUrl: './motif.page.html',
  styleUrls: ['./motif.page.scss'],
})
export class MotifPage implements OnInit {

  checkedAnswersValue: string[] = [];
  selectedAnswersList = []; 
  
  checkboxesAnswersList = [
    {
      id: 1,
      value: 'Être aidé pour les modes de gardes d\'enfant, la mobilité, l\'accès aux droits, l\'accompagnement numérique...',
      isChecked: false
    },
    {
      id: 2,
      value: 'Être coaché pour mes démarches d\'emploi (simulations entretiens d\'embauche, insertion par le sport…)',
      isChecked: false
    },
    {
      id: 3,
      value: 'Trouver un stage en entreprise',
      isChecked: false
    },
    {
      id: 4,
      value: 'Effectuer un Service Civique',
      isChecked: false
    },
    {
      id: 5,
      value: 'Trouver une Alternance (contrat d’apprentissage ou contrat de professionnalisation)',
      isChecked: false
    },
    {
      id: 6,
      value: 'Accéder à une formation professionnelle. Trouver un Emploi (Intérim, CDD, CDI…)',
      isChecked: false
    },
  ] 

  constructor() { }

  ngOnInit() {
    // this.fetchSelectedItems();
    // this.fetchCheckedValues();
  }

  changeSelection() {
    this.fetchSelectedItems()
 }

  fetchSelectedItems() {
    this.selectedAnswersList = this.checkboxesAnswersList.filter((answer, index) => {
      console.log(this.selectedAnswersList);
      return answer.isChecked
    });
  }

  fetchCheckedValues() {
    this.checkboxesAnswersList.forEach((answer, index) => {
      if (answer.isChecked) {
          this.checkedAnswersValue.push(answer.value);
          console.log(this.checkedAnswersValue);
      }
    });
  }

}
