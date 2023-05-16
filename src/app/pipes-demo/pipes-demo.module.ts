import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data/student-data.component';

@NgModule({
  declarations: [StudentDataComponent],
  imports: [CommonModule],
  exports: [StudentDataComponent],
})
export class PipesDemoModule {}
