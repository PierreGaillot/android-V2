import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartierPageRoutingModule } from './quartier-routing.module';

import { QuartierPage } from './quartier.page';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartierPageRoutingModule
  ],
  declarations: [
    QuartierPage,
    QuestionComponent,
    SwipeupComponent,
  ]
})
export class QuartierPageModule {}
