import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapAccompagnementPageRoutingModule } from './recap-accompagnement-routing.module';

import { RecapAccompagnementPage } from './recap-accompagnement.page';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';

@NgModule({
  imports: [
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
  ]
})
export class RecapAccompagnementPageModule {}
