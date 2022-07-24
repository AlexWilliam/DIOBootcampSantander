import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    count: number = 0;

    @Input()
    text: string = "";

    pessoas = [
        {
            nome: "Alex",
            sobrenome: "Gonçalves"
        },
        {
            nome: "Alice",
            sobrenome: "Dias"
        },
        {
            nome: "Alana",
            sobrenome: "Dias"
        },
        {
            nome: "Mourrice",
            sobrenome: "Cardoso"
        }
    ]

    constructor(){ 

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
