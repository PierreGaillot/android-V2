import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAccompagnementPage } from './detail-accompagnement.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAccompagnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAccompagnementPageRoutingModule {}
