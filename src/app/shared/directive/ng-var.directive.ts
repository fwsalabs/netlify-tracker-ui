import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngVar]'
})
export class NgVarDirective {
  @Input()
  set ngVar(context: unknown) {
    this.context.$implicit = this.context.ngVar = context;

    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    }
  }

  // @Input()
  // set ngVar(condition: unknown) {
  //   if (!condition && !this.hasView) {
  //     this.viewContainer.createEmbeddedView(this.templateRef, {
  //       $implicit: condition,
  //       ngVar: condition,
  //     });
  //     this.hasView = true;
  //   } else if (condition && this.hasView) {
  //     this.viewContainer.clear();
  //     this.hasView = false;
  //   }
  // }

  private context: {
    $implicit: unknown;
    ngVar: unknown;
  } = {
      $implicit: null,
      ngVar: null,
    };

  private hasView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
