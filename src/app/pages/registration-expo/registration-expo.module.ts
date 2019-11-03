import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationExpoRoutingModule} from './registration-expo-routing.module';
import {RegistrationExpoComponent} from './registration-expo.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const ANT_MODULE = [
  // NzFormModule ,
  // NzInputModule,
  // NzSelectModule,
  NgZorroAntdModule,
];
@NgModule({
  declarations: [
    RegistrationExpoComponent
  ],
  imports: [
    CommonModule,
    RegistrationExpoRoutingModule,
    ...ANT_MODULE,
    //
    ReactiveFormsModule,
    //use ngModel
    FormsModule
  ]
})
export class RegistrationExpoModule {
}
