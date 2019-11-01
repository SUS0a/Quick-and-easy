import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgZorroAntdModule, NzLayoutModule} from 'ng-zorro-antd';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

const SHARE_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  BreadcrumbComponent
];
const SHARE_ANT_MODULE = [
  NzLayoutModule,
  NgZorroAntdModule
];
@NgModule({
  declarations: [
    ...SHARE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...SHARE_ANT_MODULE
  ],
  providers: [
    ...SHARE_COMPONENTS
  ],
  exports: [
    ...SHARE_COMPONENTS
  ]
})
export class ShareModule {
}
