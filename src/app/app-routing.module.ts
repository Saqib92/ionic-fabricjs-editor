import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'editorfabric',
    pathMatch: 'full'
  },
  {
    path: 'editorfabric',
    loadChildren: () => import('./editorfabric/editorfabric.module').then( m => m.EditorfabricPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
