import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-a-propos-routing.module';

import { ModalAProposPage } from './modal-a-propos.page';
import { QuestionComponent } from 'src/app/components/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  declarations: [
    ModalAProposPage,
    QuestionComponent
  ]
})
export class ModalAProposPageModule {}
