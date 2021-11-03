import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstnamePageRoutingModule } from './firstname-routing.module';

import { FirstnamePage } from './firstname.page';
import { QuestionComponent } from 'src/app/components/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstnamePageRoutingModule
  ],
  declarations: [
    FirstnamePage,
    QuestionComponent
  ]
})
export class FirstnamePageModule {}
