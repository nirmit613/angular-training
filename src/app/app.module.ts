import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { HooksMethodsModule } from './hooks-methods/hooks-methods.module';
import { ServiceDemoModule } from './service-demo/service-demo.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpDemoModule } from './http-demo/http-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    HooksMethodsModule,
    ServiceDemoModule,
    ReactiveFormModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
