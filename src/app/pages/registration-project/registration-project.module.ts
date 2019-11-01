import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationProjectRoutingModule} from './registration-project-routing.module';
import {RegistrationProjectComponent} from './registration-project.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from '../../common/share.module';

const ANT_MODULE = [
  // NzFormModule ,
  // NzInputModule,
  // NzSelectModule,
  NgZorroAntdModule,
];
@NgModule({
  declarations: [
    RegistrationProjectComponent,
  ],
  imports: [
    CommonModule,
    RegistrationProjectRoutingModule,
    ...ANT_MODULE,
    ReactiveFormsModule,
    ShareModule

  ]
})
export class RegistrationProjectModule { }
