import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailTotalPageRoutingModule } from './detail-total-routing.module';
import { DetailTotalPage } from './detail-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTotalPageRoutingModule
  ],
  declarations: [DetailTotalPage]
})
export class DetailTotalPageModule {}
