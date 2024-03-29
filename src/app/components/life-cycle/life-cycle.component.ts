import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-life-cycle',
    templateUrl: './life-cycle.component.html',
    styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { 
        console.log("Chamou o construtor.")
    }

    ngOnInit(): void {
        console.log("Chamou o OnInit.")
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Chamou o OnChanges.")
    }

    ngDoCheck(): void {
        console.log("Chamou o DoCheck.")
    }

    ngAfterContentInit(): void {
        console.log("Chamou o AfterContentInit.")
    }

    ngAfterContentChecked(): void {
        console.log("Chamou o AfterContentChecked.")
    }

    ngAfterViewInit(): void {
        console.log("Chamou o AfterViewInit.")
    }

    ngAfterViewChecked(): void {
        console.log("Chamou o AfterViewChecked.")
    }

    ngOnDestroy(): void {
        console.log("Chamou o OnDestroy.")
    }

}
