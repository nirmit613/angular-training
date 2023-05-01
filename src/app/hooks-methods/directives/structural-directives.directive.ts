import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirectives]',
})
export class StructuralDirectivesDirective {
  @Input() set appStructuralDirectives(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // templetRef : is a template we need to add/remove from DOM (what we need to add or remove)
  // viewContainerRef : is a view we need to add/remove from DOM ( where we need to add or remove)
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
