import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FinPageRoutingModule } from './fin-routing.module';
import { FinPage } from './fin.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinPageRoutingModule,
    SharedModule
  ],
  declarations: [
    FinPage
  ]
})
export class FinPageModule {}
