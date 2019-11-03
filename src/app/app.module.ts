import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NZ_CONFIG, NZ_I18N, NzConfig, NzLayoutModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/zh';

registerLocaleData(en);
const APP_ANT_MODULE = [
  NzLayoutModule,
];
const ngZorroConfig: NzConfig = {
  // 注意没有 nz 前缀
  message: {
    nzTop: 120,
    nzMaxStack: 4
  },
  notification: {nzTop: 240}
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...APP_ANT_MODULE,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US},
    {provide: NZ_CONFIG, useValue: ngZorroConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
