import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-modal-a-propos',
  templateUrl: './modal-a-propos.page.html',
  styleUrls: ['./modal-a-propos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalAProposPage implements OnInit {

  private firstname: string = '';
  private area: string = '';
  private disabledStatus: boolean = true;

  constructor(
    public modalController: ModalController,
    public userDataService: UserDataService
  ) { }

  @Input() question: string;

  ngOnInit() {
    this.reset()
  }

  reset(): void {
    this.disabledStatus = true;
  }

  // Dismiss modal
  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  updateUserFirstame(event): void {
    if (event.key === "Enter" && this.firstname !== '') {
      this.userDataService.setUserFirstname(this.firstname)
      this.disabledStatus = false;
    } 
  }

  updateUserAge(ageValue): void {
    this.userDataService.setUserAge(ageValue);
    
    if (ageValue !== '') {
      this.disabledStatus = false;
    }       
  }

  updateUserSexe(sexeValue): void {
    this.userDataService.setUserSexe(sexeValue);
    
    if (sexeValue !== '') {
      this.disabledStatus = false;
    }       
  }

  updateUserCity(cityValue): void {
    this.userDataService.setUserCity(cityValue);
    
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

}
