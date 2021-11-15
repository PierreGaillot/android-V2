import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MethodePage } from './methode.page';

const routes: Routes = [
  {
    path: '',
    component: MethodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodePageRoutingModule {}
