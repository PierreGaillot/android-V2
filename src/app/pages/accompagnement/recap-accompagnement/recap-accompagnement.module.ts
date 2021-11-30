import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecapAccompagnementPageRoutingModule } from './recap-accompagnement-routing.module';
import { RecapAccompagnementPage } from './recap-accompagnement.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapAccompagnementPageRoutingModule,
    SharedModule
  ],
  
  declarations: [
    RecapAccompagnementPage
  ]
})

export class RecapAccompagnementPageModule {}
