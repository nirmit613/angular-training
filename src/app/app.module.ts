import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { HooksMethodsModule } from './hooks-methods/hooks-methods.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CommonErrorModule, HooksMethodsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
