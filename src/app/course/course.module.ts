import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarsComponent } from "../stars/stars.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

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
        CourseInfoComponent,
        ReplacePipe,
        StarsComponent
    ],
    imports: [
        courseRoutes,
        FormsModule,
        CommonModule
    ]
})

export class CourseModule { }