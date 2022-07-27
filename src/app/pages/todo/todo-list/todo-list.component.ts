import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoTitle: string = "";

    todos: Array<Todo> = [];

    constructor() { }

    ngOnInit(): void {

    }

    addTodo(title: string): void {
        this.todos.push();
    }

}
