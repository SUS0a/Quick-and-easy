import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationExpoComponent} from './registration-expo.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationExpoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationExpoRoutingModule { }
