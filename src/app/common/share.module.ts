import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgZorroAntdModule, NzLayoutModule} from 'ng-zorro-antd';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {AlertComponent} from './alert/alert.component';
import {MessageComponent} from './message/message.component';
import {MessageService} from './message/message.service';

const SHARE_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  BreadcrumbComponent,
  AlertComponent,
  MessageComponent,
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
    ...SHARE_COMPONENTS,
    MessageService,
  ],
  exports: [
    ...SHARE_COMPONENTS,

  ]
})
export class ShareModule {
}
