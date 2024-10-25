import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'search', loadChildren: () => import('./search/search.module').then((m) => m.SearchModule) },
  ]),
  Shell.childRoutes([
    { path: 'canvas', loadChildren: () => import('./canvas/canvas.module').then((m) => m.CanvasModule) },
  ]),
  Shell.childRoutes([{ path: 'solid', loadChildren: () => import('./solid/solid.module').then((m) => m.SolidModule) }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
