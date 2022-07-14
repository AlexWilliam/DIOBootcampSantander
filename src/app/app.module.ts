import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { CourseInfoComponent } from './course/course-info.component';
import { StarsComponent } from './stars/stars.component';
import { ReplacePipe } from './pipe/replace.pipie';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';


let routes = RouterModule.forRoot([
  {
    path: 'courses',
    component: CourseListComponent
  },  
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  },
]);


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarsComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
