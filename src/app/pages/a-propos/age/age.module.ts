import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgePageRoutingModule } from './age-routing.module';

import { AgePage } from './age.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgePageRoutingModule,
    SharedModule
  ],
  declarations: [
    AgePage
  ]
})
export class AgePageModule {}
