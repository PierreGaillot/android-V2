import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotifPageRoutingModule } from './motif-routing.module';

import { MotifPage } from './motif.page';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotifPageRoutingModule
  ],
  declarations: [
    MotifPage,
    QuestionComponent,
    SwipeupComponent,
  ]
})
export class MotifPageModule {}
