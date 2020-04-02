import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.css']
})
export class TodosMainComponent implements OnInit {
  todos: Todo[];
  id = 1;

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: this.id++,
        task: 'Fold Clothes',
        complete: false
      },
      {
        id: this.id++,
        task: 'Put Clothes in dresser',
        complete: false
      },
      {
        id: this.id++,
        task: 'Relax',
        complete: false
      },
      {
        id: this.id++,
        task: 'Try to pet cat',
        complete: true
      },
      {
        id: this.id++,
        task: 'Pet Dog',
        complete: false
      },
      {
        id: this.id++,
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
