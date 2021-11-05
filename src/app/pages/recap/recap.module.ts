import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapPageRoutingModule } from './recap-routing.module';

import { RecapPage } from './recap.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapPageRoutingModule,
  ],
  declarations: [
    RecapPage,
    NavbarComponent,
    EugenieInfosComponent,
    ProgressBarComponent,
    SwipeupComponent,
  ]
})
export class RecapPageModule {}
