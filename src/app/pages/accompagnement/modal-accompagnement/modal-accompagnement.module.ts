import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalAccompagnementPageRoutingModule } from './modal-accompagnement-routing.module';
import { ModalAccompagnementPage } from './modal-accompagnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAccompagnementPageRoutingModule
  ],
  declarations: [ModalAccompagnementPage]
})
export class ModalAccompagnementPageModule {}
