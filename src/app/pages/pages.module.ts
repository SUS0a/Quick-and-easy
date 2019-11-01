import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {ShareModule} from '../common/share.module';
import {NzLayoutModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

const PAGES_COMPONENTS = [
  PagesComponent
];
const PAGES_ANT_MODULE = [
  NzLayoutModule,
];
@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShareModule,
    FormsModule,
    ...PAGES_ANT_MODULE,
  ]
})
export class PagesModule {
}
