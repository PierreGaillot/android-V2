import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRGPDPageRoutingModule } from './modal-rgpd-routing.module';

import { ModalRGPDPage } from './modal-rgpd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRGPDPageRoutingModule
  ],
  declarations: [ModalRGPDPage]
})
export class ModalRGPDPageModule {}
