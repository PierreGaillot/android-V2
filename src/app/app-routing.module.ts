import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'firstname',
    loadChildren: () => import('./pages/firstname/firstname.module').then( m => m.FirstnamePageModule)
  },
  {
    path: 'sexe',
    loadChildren: () => import('./pages/sexe/sexe.module').then( m => m.SexePageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./pages/age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'ville',
    loadChildren: () => import('./pages/ville/ville.module').then( m => m.VillePageModule)
  },
  {
    path: 'quartier',
    loadChildren: () => import('./pages/quartier/quartier.module').then( m => m.QuartierPageModule)
  },
  {
    path: 'recap-a-propos',
    loadChildren: () => import('./pages/recap/recap-a-propos.module').then( m => m.RecapAProposPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'motif',
    loadChildren: () => import('./pages/motif/motif.module').then( m => m.MotifPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
