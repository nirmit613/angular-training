import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { StructuralDirectivesDirective } from './directives/structural-directives.directive';

@NgModule({
  declarations: [ParentComponentComponent, ChildComponentComponent, CustomDirectivesDirective, StructuralDirectivesDirective],
  imports: [CommonModule],
  exports: [ParentComponentComponent, ChildComponentComponent],
})
export class HooksMethodsModule {}
