import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecapPageRoutingModule } from './recap-a-propos-routing.module';

import { RecapAProposPage } from './recap-a-propos.page';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';

import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { EugenieAnimComponent } from 'src/app/components/eugenie-anim/eugenie-anim.component';
import { SwipeModule } from 'src/app/modules/swipe/swipe.module';

export function playerFactory(){
  return player
}

@NgModule({
  imports: [
    SwipeModule,
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    RecapPageRoutingModule,
  ],
  declarations: [
    RecapAProposPage,
    EugenieInfosComponent,
    ProgressBarComponent,
    SwipeupComponent,
    EugenieAnimComponent
  ]
})
export class RecapAProposPageModule {}
