import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexePageRoutingModule } from './sexe-routing.module';

import { SexePage } from './sexe.page';
import { QuestionComponent } from 'src/app/components/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexePageRoutingModule
  ],
  declarations: [
    SexePage, 
    QuestionComponent,
  ]
})
export class SexePageModule {}
