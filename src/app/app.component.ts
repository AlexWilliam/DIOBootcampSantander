import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/PeopleService/people.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    count: number = 0;

    @Input()
    text: string = "";

    constructor(private _peopleService: PeopleService){ 
        
    }

    ngOnInit(){
        let interval = setInterval(() => {
            this.count++;
            if(this.count === 10){
                clearInterval(interval);
            }
        }, 1000);
    }

    clickou(): void {
        alert('clickou em mim!');
    }

}
