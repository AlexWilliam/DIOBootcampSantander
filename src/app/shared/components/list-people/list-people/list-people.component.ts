import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/shared/services/PeopleService/people.service';

@Component({
    selector: 'app-list-people',
    templateUrl: './list-people.component.html',
    styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

    pessoas = [
        {
            firstName: '',
            lastName: '',
            age: ''
        }
    ];

    constructor(private _peopleService: PeopleService) { }

    ngOnInit(): void {
        this.getPeople();
    }

    getPeople() {
        this._peopleService.getPeople().subscribe(people => {
            this.pessoas = people;
        });
    }

}
