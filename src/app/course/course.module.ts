import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarsModule } from "../shared/component/stars/stars.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

let courseRoutes = RouterModule.forChild([
    {
      path: 'courses',
      component: CourseListComponent
    },  
    {
      path: 'courses/info/:id',
      component: CourseInfoComponent
    },
  ]);

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        courseRoutes,
        FormsModule,
        CommonModule,
        StarsModule,
        AppPipeModule
    ]
})

export class CourseModule { }