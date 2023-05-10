import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiComponent } from './user-api/user-api.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserApiComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserApiComponent],
})
export class HttpDemoModule {}
