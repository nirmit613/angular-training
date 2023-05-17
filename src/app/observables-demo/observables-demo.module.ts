import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObsTypesComponent } from './obs-types/obs-types.component';

@NgModule({
  declarations: [ObsTypesComponent],
  imports: [CommonModule],
  exports: [ObsTypesComponent],
})
export class ObservablesDemoModule {}
