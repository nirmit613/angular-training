import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UserComponent],
})
export class ReactiveFormModule {}
