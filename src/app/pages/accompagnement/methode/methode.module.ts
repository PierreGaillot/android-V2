import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MethodePageRoutingModule } from './methode-routing.module';

import { MethodePage } from './methode.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodePageRoutingModule
  ],
  declarations: [
    MethodePage,
    QuestionComponent,
    SwipeupComponent,
  ]
})
export class MethodePageModule {}
