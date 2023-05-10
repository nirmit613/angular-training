import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiComponent } from './user-api/user-api.component';

@NgModule({
  declarations: [UserApiComponent],
  imports: [CommonModule],
  exports: [UserApiComponent],
})
export class HttpDemoModule {}
