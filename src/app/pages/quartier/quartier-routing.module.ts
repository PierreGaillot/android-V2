import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartierPage } from './quartier.page';

const routes: Routes = [
  {
    path: '',
    component: QuartierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartierPageRoutingModule {}
