import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapTotalPage } from './recap-total.page';

const routes: Routes = [
  {
    path: '',
    component: RecapTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapTotalPageRoutingModule {}
