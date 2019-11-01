import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortalRoutingModule} from './portal-routing.module';
import {LoginComponent} from './login/login.component';
import {PortalComponent} from './portal.component';
import {NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const PORTAL_COMPONENTS = [
  PortalComponent,
  LoginComponent
];
const PORTAL_ANT_MODULE = [
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule
];
@NgModule({
  declarations: [...PORTAL_COMPONENTS],
  imports: [
    CommonModule,
    PortalRoutingModule,
    ...PORTAL_ANT_MODULE,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PortalModule {
}
