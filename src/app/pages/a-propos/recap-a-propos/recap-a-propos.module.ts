import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecapPageRoutingModule } from './recap-a-propos-routing.module';
import { RecapAProposPage } from './recap-a-propos.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapPageRoutingModule,
    SharedModule
  ],
  declarations: [
    RecapAProposPage
  ]
})
export class RecapAProposPageModule {}
