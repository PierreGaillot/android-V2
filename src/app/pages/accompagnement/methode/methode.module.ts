import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MethodePageRoutingModule } from './methode-routing.module';
import { MethodePage } from './methode.page';

import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodePageRoutingModule,
    SharedModule
  ],
  declarations: [
    MethodePage
  ]
})
export class MethodePageModule {}
