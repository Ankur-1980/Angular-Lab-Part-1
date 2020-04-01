import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.css']
})
export class TodosMainComponent implements OnInit {
  todos: Todo[];
  id = 6;

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        task: 'Fold Clothes',
        complete: false
      },
      {
        id: 2,
        task: 'Put Clothes in dresser',
        complete: false
      },
      {
        id: 3,
        task: 'Relax',
        complete: false
      },
      {
        id: 4,
        task: 'Try to pet cat',
        complete: true
      },
      {
        id: 5,
        task: 'Pet Dog',
        complete: false
      },
      {
        id: 6,
        task: 'Be awesome',
        complete: false
      }
    ];
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.task !== todo.task);
    if (this.todos.length < 1) {
      alert(`Nothing to do!`);
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
