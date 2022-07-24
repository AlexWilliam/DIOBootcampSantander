import { Component, OnInit } from '@angular/core';
import { ListApiService } from 'src/app/shared/services/list-api/list-api.service';

@Component({
    selector: 'app-list-api',
    templateUrl: './list-api.component.html',
    styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

    pokemons: Array<any> = [];

    constructor(private listService: ListApiService) { }

    ngOnInit(): void {
        this.getList();
    }

    getList(){
        this.listService.getList().subscribe(pokemons => {
            this.pokemons = pokemons.results;
        })
    }

}
