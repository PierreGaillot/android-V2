import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinPageRoutingModule } from './fin-routing.module';

import { FinPage } from './fin.page';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinPageRoutingModule
  ],
  declarations: [
    FinPage,
    EugenieInfosComponent,
  ]
})
export class FinPageModule {}
