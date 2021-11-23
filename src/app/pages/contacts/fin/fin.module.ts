import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinPageRoutingModule } from './fin-routing.module';

import { FinPage } from './fin.page';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';

import {LottieModule} from 'ngx-lottie'
import player from 'lottie-web';
import { EugenieAnimComponent } from 'src/app/components/eugenie-anim/eugenie-anim.component';

export function playerFactory(){
  return player
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    FinPageRoutingModule,
  ],
  declarations: [
    FinPage,
    EugenieInfosComponent,
    EugenieAnimComponent,
  ]
})
export class FinPageModule {}
