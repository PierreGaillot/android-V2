import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SexePageRoutingModule } from './sexe-routing.module';
import { SexePage } from './sexe.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexePageRoutingModule,
    SharedModule
  ],
  declarations: [
    SexePage
  ]
})
export class SexePageModule {}
