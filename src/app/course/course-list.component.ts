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
        this.retriveAll();
    }
    
    retriveAll(): void {
        this._courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses;
            },
            error: err => console.log(err)
        });
    }

    deleteById(courseId: number): void {
        this._courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log("Deleted");
                this.retriveAll();
            },
            error: err => console.log(err)
        })
    }

    set filter(filtro: string) {
        this._filterBy = filtro;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(): string { 
        return this._filterBy; 
    }

}