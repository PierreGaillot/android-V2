import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgePageRoutingModule } from './age-routing.module';

import { AgePage } from './age.page';
import { QuestionComponent } from 'src/app/components/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgePageRoutingModule
  ],
  declarations: [
    AgePage,
    QuestionComponent,
  ]
})
export class AgePageModule {}
