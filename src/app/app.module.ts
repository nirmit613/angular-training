import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { HooksMethodsModule } from './hooks-methods/hooks-methods.module';
import { ServiceDemoModule } from './service-demo/service-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    HooksMethodsModule,
    ServiceDemoModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
