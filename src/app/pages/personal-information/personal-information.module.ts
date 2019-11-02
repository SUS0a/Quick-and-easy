import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationRoutingModule } from './personal-information-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PersonalInformationComponent} from './personal-information.component';
import {ReactiveFormsModule} from '@angular/forms';

const ANT_MODULE = [
  // NzFormModule ,
  // NzInputModule,
  // NzSelectModule,
  NgZorroAntdModule,


];
@NgModule({
  declarations: [
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    PersonalInformationRoutingModule,
    ...ANT_MODULE,
    ReactiveFormsModule,
  ]
})
export class PersonalInformationModule { }
