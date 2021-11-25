import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VillePageRoutingModule } from './ville-routing.module';

import { VillePage } from './ville.page';
// import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';
import { SwipeModule } from 'src/app/modules/swipe/swipe.module';

@NgModule({
  imports: [
    SwipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VillePageRoutingModule
  ],
  declarations: [
    VillePage,
    // NavbarComponent,
    QuestionComponent,
    SwipeupComponent, 
  ]
})
export class VillePageModule {}
