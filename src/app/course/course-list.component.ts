import { Component, OnInit } from "@angular/core";
import { Course } from './course';
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit { 

    filteredCourses: Course[] = [];

    textContent: string = " Courses List";

    _courses: Course[] = [];

    _filterBy: string = "";

    constructor(private _courseService: CourseService) { }

    ngOnInit(): void {
        this._courses = this._courseService.retriveAll();
        this.filteredCourses = this._courses;
    }

    set filter(filtro: string) {
        this._filterBy = filtro;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(): string { 
        return this._filterBy; 
    }

}