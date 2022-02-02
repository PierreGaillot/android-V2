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

  public firstname: string = '';
  public area: string = '';
  public disabledStatus: boolean = true;

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

}
