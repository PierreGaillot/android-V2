import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstnamePageRoutingModule } from './firstname-routing.module';

import { FirstnamePage } from './firstname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstnamePageRoutingModule
  ],
  declarations: [FirstnamePage]
})
export class FirstnamePageModule {}
