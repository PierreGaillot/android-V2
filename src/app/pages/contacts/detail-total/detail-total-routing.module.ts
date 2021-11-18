import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTotalPage } from './detail-total.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTotalPageRoutingModule {}
