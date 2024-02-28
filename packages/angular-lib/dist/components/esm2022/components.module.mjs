import { APP_INITIALIZER, NgModule } from "@angular/core";
import { defineCustomElements } from "@a0vy/uxcore/loader";
import { DIRECTIVES } from "./lib/stencil-generated";
import * as i0 from "@angular/core";
import * as i1 from "./lib/stencil-generated/components";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQVlyRCxNQUFNLE9BQU8sZ0JBQWdCO2lGQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjt3RUFSZDtZQUNQO2dCQUNJLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9CO2dCQUN0QyxLQUFLLEVBQUUsSUFBSTthQUNkO1NBQ0o7O2lGQUVRLGdCQUFnQjtjQVg1QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUN4QixTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxvQkFBb0I7d0JBQ3RDLEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7O3dGQUNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gXCJAYTB2eS91eGNvcmUvbG9hZGVyXCI7XHJcbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tIFwiLi9saWIvc3RlbmNpbC1nZW5lcmF0ZWRcIjtcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVNdLFxyXG4gICAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IGRlZmluZUN1c3RvbUVsZW1lbnRzLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUgeyB9Il19