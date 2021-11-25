import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapAccompagnementPageRoutingModule } from './recap-accompagnement-routing.module';

import { RecapAccompagnementPage } from './recap-accompagnement.page';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';

import {LottieModule} from 'ngx-lottie'
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
    RecapAccompagnementPageRoutingModule
  ],
  
  declarations: [
    RecapAccompagnementPage,
    EugenieInfosComponent,
    SwipeupComponent,
    ProgressBarComponent,
    EugenieAnimComponent,
  ]
})

export class RecapAccompagnementPageModule {}
