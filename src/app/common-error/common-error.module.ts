import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentOneComponent,
   
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ComponentOneComponent,
  
  ],
})
export class CommonErrorModule {}
