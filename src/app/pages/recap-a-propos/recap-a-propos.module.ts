import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecapPageRoutingModule } from './recap-a-propos-routing.module';

import { RecapAProposPage } from './recap-a-propos.page';
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
    RecapAProposPage,
    EugenieInfosComponent,
    ProgressBarComponent,
    SwipeupComponent,
  ]
})
export class RecapAProposPageModule {}
