import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { SharedModule } from 'src/app/modules/shared/shared.module';

// import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
// import { HomePageRoutingModule } from './home-routing.module';
// import { EugenieAnimComponent } from 'src/app/components/eugenie-anim/eugenie-anim.component';
// import {LottieModule} from 'ngx-lottie'
// import player from 'lottie-web';

// export function playerFactory(){
//   return player
// }

@NgModule({
  imports: [
    // LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    // EugenieInfosComponent,
    // EugenieAnimComponent,
  ]
})
export class HomePageModule {}
