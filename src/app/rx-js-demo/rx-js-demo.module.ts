import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [OperatorsComponent],
  imports: [CommonModule],
  exports: [OperatorsComponent],
})
export class RxJsDemoModule {}
