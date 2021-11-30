import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MotifPageRoutingModule } from './motif-routing.module';
import { MotifPage } from './motif.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotifPageRoutingModule,
    SharedModule
  ],
  declarations: [
    MotifPage
  ]
})
export class MotifPageModule {}
