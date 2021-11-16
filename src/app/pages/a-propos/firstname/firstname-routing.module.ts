import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstnamePage } from './firstname.page';

const routes: Routes = [
  {
    path: '',
    component: FirstnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstnamePageRoutingModule {}
