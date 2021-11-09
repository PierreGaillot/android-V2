import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotifPageRoutingModule } from './motif-routing.module';

import { MotifPage } from './motif.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { QuestionComponent } from 'src/app/components/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotifPageRoutingModule
  ],
  declarations: [
    MotifPage,
    NavbarComponent,
    QuestionComponent,
  ]
})
export class MotifPageModule {}
