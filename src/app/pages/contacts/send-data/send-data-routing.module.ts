import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendDataPage } from './send-data.page';

const routes: Routes = [
  {
    path: '',
    component: SendDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendDataPageRoutingModule {}
