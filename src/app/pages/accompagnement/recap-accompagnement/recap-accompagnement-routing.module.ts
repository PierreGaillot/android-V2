import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapAccompagnementPage } from './recap-accompagnement.page';

const routes: Routes = [
  {
    path: '',
    component: RecapAccompagnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapAccompagnementPageRoutingModule {}
