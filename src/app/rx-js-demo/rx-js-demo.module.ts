import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators/operators.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OperatorsComponent],
  imports: [CommonModule, FormsModule],
  exports: [OperatorsComponent],
})
export class RxJsDemoModule {}
