import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data/student-data.component';
import { percentagePipe } from './percentage.pipes';

@NgModule({
  declarations: [StudentDataComponent, percentagePipe],
  imports: [CommonModule],
  exports: [StudentDataComponent],
})
export class PipesDemoModule {}
