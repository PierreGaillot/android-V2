import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapAProposPage } from './recap-a-propos.page';

const routes: Routes = [
  {
    path: '',
    component: RecapAProposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapPageRoutingModule {}
