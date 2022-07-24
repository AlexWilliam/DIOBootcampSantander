import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor() { }

    getPeople(): Observable<any> {
        let peopleArray = [
            {
              firstName: "Alex",
              lastName: "Gonçalves",
              age: "31"
            },
            {
                firstName: "Alice",
                lastName: "Dias",
                age: "30"
            },
            {
                firstName: "Alana",
                lastName: "Dias",
                age: "25"
            },
            {
                firstName: "Mourrice",
                lastName: "Cardoso",
                age: "24"
            }
        ];

        return of(peopleArray);
    }
}
