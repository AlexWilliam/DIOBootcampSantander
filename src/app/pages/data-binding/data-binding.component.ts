import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit, OnChanges {

    @Input()
    text: string = "Data Binding"

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    clicouNoFilho(texto: string) {
        this.text = texto
    }
}
