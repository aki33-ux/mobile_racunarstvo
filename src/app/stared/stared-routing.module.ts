import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaredlaptopsPage } from './stared.page';

const routes: Routes = [
  {
    path: '',
    component: StaredlaptopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaredlaptopsPageRoutingModule {}
