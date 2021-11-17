import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsAProposPageRoutingModule } from './details-a-propos-routing.module';

import { DetailsAProposPage } from './details-a-propos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsAProposPageRoutingModule
  ],
  declarations: [
    DetailsAProposPage,
  ]
})
export class DetailsAProposPageModule {}
