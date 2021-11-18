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
    loadChildren: () => import('./pages/a-propos/firstname/firstname.module').then( m => m.FirstnamePageModule)
  },
  {
    path: 'sexe',
    loadChildren: () => import('./pages/a-propos/sexe/sexe.module').then( m => m.SexePageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./pages/a-propos/age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'ville',
    loadChildren: () => import('./pages/a-propos/ville/ville.module').then( m => m.VillePageModule)
  },
  {
    path: 'quartier',
    loadChildren: () => import('./pages/a-propos/quartier/quartier.module').then( m => m.QuartierPageModule)
  },
  {
    path: 'recap-a-propos',
    loadChildren: () => import('./pages/a-propos/recap-a-propos/recap-a-propos.module').then( m => m.RecapAProposPageModule)
  },
  {
    path: 'details-a-propos',
    loadChildren: () => import('./pages/a-propos/details-a-propos/details-a-propos.module').then( m => m.DetailsAProposPageModule)
  },
  {
    path: 'modal-a-propos',
    loadChildren: () => import('./pages/a-propos/modal-a-propos/modal-a-propos.module').then( m => m.ModalAProposPageModule)
  },
  {
    path: 'motif',
    loadChildren: () => import('./pages/accompagnement/motif/motif.module').then( m => m.MotifPageModule)
  },
  {
    path: 'methode',
    loadChildren: () => import('./pages/accompagnement/methode/methode.module').then( m => m.MethodePageModule)
  },
  {
    path: 'rythme',
    loadChildren: () => import('./pages/accompagnement/rythme/rythme.module').then( m => m.RythmePageModule)
  },
  {
    path: 'recap-accompagnement',
    loadChildren: () => import('./pages/accompagnement/recap-accompagnement/recap-accompagnement.module').then( m => m.RecapAccompagnementPageModule)
  },
  {
    path: 'detail-accompagnement',
    loadChildren: () => import('./pages/accompagnement/detail-accompagnement/detail-accompagnement.module').then( m => m.DetailAccompagnementPageModule)
  },  {
    path: 'contact',
    loadChildren: () => import('./pages/contacts/contact/contact.module').then( m => m.ContactPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
