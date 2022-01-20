import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendDataPageRoutingModule } from './send-data-routing.module';
import { SendDataPage } from './send-data.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendDataPageRoutingModule,
    SharedModule
  ],
  declarations: [SendDataPage]
})
export class SendDataPageModule {}
