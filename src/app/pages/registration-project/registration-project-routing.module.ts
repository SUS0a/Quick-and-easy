import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationProjectComponent} from './registration-project.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationProjectRoutingModule {
}
