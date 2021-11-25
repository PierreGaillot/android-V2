import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RythmePageRoutingModule } from './rythme-routing.module';

import { RythmePage } from './rythme.page';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeModule } from 'src/app/modules/swipe/swipe.module';

@NgModule({
  imports: [
    SwipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RythmePageRoutingModule
  ],
  declarations: [
    RythmePage,
    QuestionComponent,
    SwipeupComponent,
  ]
})
export class RythmePageModule {}
