import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexePage } from './sexe.page';

const routes: Routes = [
  {
    path: '',
    component: SexePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexePageRoutingModule {}
