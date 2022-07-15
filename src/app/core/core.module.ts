import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

let coreRoutes = RouterModule.forChild([
  {
    path: '**',
    component: Error404Component
  },
])

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule,
        coreRoutes
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule { }