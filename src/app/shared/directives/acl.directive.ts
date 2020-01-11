import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


// *appAcl="'add-product'"


const roles = {
  user: ['view-product'],
  admin: ['view-product', 'add-product']
};

@Directive({
  selector: '[appAcl]'
})
export class AclDirective {

  @Input()
  public appAcl: string;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef,
  ) { }


  public ngOnInit(): void {

    const role = 'admin';



    const allowed: boolean = roles[role].includes(this.appAcl);


    if (allowed) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      return;
    }


    return this.viewContainer.clear();
  }
}
