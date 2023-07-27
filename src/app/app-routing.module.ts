import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path:'hello',
  loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
