import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number = 0;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }

}