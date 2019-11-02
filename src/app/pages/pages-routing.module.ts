import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'registration-project',
        loadChildren: () => import('./registration-project/registration-project.module').then(mod => mod.RegistrationProjectModule)
      },
      {
        path: 'personal-information',
        loadChildren: () => import('./personal-information/personal-information.module').then(mod => mod.PersonalInformationModule)
      },
      {
        path: 'registration-expo',
        loadChildren: () => import('./registration-expo/registration-expo.module').then(mod => mod.RegistrationExpoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
