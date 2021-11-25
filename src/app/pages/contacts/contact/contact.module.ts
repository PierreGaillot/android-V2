import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';
import { SwipeModule } from 'src/app/modules/swipe/swipe.module';

@NgModule({
  imports: [
    SwipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule
  ],
  declarations: [
    ContactPage,
    QuestionComponent,
    SwipeupComponent,
  ]
})
export class ContactPageModule {}
