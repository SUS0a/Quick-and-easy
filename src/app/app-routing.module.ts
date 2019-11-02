import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/registration-expo',
    pathMatch: 'full'
  },
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module').then(mod => mod.PortalModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
