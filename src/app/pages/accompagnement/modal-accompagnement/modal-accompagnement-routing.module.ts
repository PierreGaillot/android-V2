import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAccompagnementPage } from './modal-accompagnement.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAccompagnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAccompagnementPageRoutingModule {}
