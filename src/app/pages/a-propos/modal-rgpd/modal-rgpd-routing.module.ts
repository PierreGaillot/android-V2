import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRGPDPage } from './modal-rgpd.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRGPDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRGPDPageRoutingModule {}
