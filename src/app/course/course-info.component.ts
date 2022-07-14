import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor( private router: Router, private activatedRoute: ActivatedRoute, private courseService: CourseService){ }

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }

    save(): void {
        this.courseService.save(this.course);

        this.router.navigate(['/courses']);
    }
}