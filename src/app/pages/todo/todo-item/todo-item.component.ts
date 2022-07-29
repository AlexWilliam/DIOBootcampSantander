import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() 
    todo: Todo;

    constructor() {
        this.todo = {
            id: 0,
            title: '',
            done: false
        };
    }
    done: boolean = false;

    @Output()
    remove = new EventEmitter;

    ngOnInit(): void {
    }

    removeTodo(): void {
        this.remove.emit(this.todo);
    }

    markAsDone(): void {
        this.done = true;
    }

}
