import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortalComponent} from './portal.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {
}
