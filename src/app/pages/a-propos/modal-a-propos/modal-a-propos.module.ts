import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-a-propos-routing.module';
import { ModalAProposPage } from './modal-a-propos.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ModalAProposPage
  ]
})
export class ModalAProposPageModule {}
