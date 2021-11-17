import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsAProposPage } from './details-a-propos.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsAProposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsAProposPageRoutingModule {}
