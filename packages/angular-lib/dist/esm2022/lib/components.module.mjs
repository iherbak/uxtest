import { APP_INITIALIZER, NgModule } from "@angular/core";
import { defineCustomElements } from "@a0vy/uxcore/loader";
import { DIRECTIVES } from "./stencil-generated";
import * as i0 from "@angular/core";
import * as i1 from "./stencil-generated/components";
export class ComponentsModule {
    static { this.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ComponentsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: () => defineCustomElements,
                multi: true
            }
        ] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        useFactory: () => defineCustomElements,
                        multi: true
                    }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: [i1.MyComponent], exports: [i1.MyComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFZakQsTUFBTSxPQUFPLGdCQUFnQjtpRkFBaEIsZ0JBQWdCO21FQUFoQixnQkFBZ0I7d0VBUmQ7WUFDUDtnQkFDSSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFvQjtnQkFDdEMsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKOztpRkFFUSxnQkFBZ0I7Y0FYNUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDeEIsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9CO3dCQUN0QyxLQUFLLEVBQUUsSUFBSTtxQkFDZDtpQkFDSjthQUNKOzt3RkFDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tIFwiQGEwdnkvdXhjb3JlL2xvYWRlclwiO1xyXG5pbXBvcnQgeyBESVJFQ1RJVkVTIH0gZnJvbSBcIi4vc3RlbmNpbC1nZW5lcmF0ZWRcIjtcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVNdLFxyXG4gICAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IGRlZmluZUN1c3RvbUVsZW1lbnRzLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUgeyB9Il19