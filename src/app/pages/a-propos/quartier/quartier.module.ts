import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QuartierPageRoutingModule } from './quartier-routing.module';
import { QuartierPage } from './quartier.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartierPageRoutingModule,
    SharedModule
  ],
  declarations: [
    QuartierPage
  ]
})
export class QuartierPageModule {}
