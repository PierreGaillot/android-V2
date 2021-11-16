import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAProposPage } from './modal-a-propos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAProposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
