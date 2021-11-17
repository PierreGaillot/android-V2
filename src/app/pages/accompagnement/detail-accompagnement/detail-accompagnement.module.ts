import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAccompagnementPageRoutingModule } from './detail-accompagnement-routing.module';

import { DetailAccompagnementPage } from './detail-accompagnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAccompagnementPageRoutingModule
  ],
  declarations: [DetailAccompagnementPage]
})
export class DetailAccompagnementPageModule {}
