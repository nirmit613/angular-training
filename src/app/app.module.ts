import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { HooksMethodsModule } from './hooks-methods/hooks-methods.module';
import { ServiceDemoModule } from './service-demo/service-demo.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpDemoModule } from './http-demo/http-demo.module';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { RouterDemoModule } from './router-demo/router-demo.module';
import { PipesDemoModule } from './pipes-demo/pipes-demo.module';
import { RxJsDemoModule } from './rx-js-demo/rx-js-demo.module';
import { ObservablesDemoModule } from './observables-demo/observables-demo.module';

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
    TemplateDrivenModule,
    ReactiveFormsModule,
    HttpDemoModule,
    FormsModule,
    RouterDemoModule,
    PipesDemoModule,
    RxJsDemoModule,
    ObservablesDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
