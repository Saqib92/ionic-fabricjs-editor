import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorfabricPage } from './editorfabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditorfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorfabricPageRoutingModule {}
